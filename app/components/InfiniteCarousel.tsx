'use client';

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // Adjust based on your NextUI/Next.js setup
// import { Image as NextUIImage } from "@nextui-org/react"; // If using NextUI

interface InfiniteCarouselProps {
  images: { id: number, src: string; alt?: string }[];
  autoPlay?: boolean;
  intervalTime?: number;
}

const InfiniteCarousel = ({
  images,
  autoPlay = true,
  intervalTime = 3000 // Customizable wait time in ms
}: InfiniteCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. The function you can call whenever necessary to cycle to the next image
  const cycleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Optional: A function to go backwards
  const cyclePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // 2. Set up the customizable auto-play loop
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(cycleNext, intervalTime);
    return () => clearInterval(timer);
  }, [autoPlay, cycleNext, intervalTime]);

  // Fallback if no images
  if (!images || images.length === 0) return null;

  return (
    <div className="relative flex justify-center items-center h-[224px] w-[900px] overflow-hidden">
      {images.map((img, index) => {
        // 3. Calculate relative distance from the current active index
        const num = images.length;
        let diff = (index - activeIndex + num) % num;

        // Normalize the diff so it spans smoothly from negative (left) to positive (right)
        if (diff > Math.floor(num / 2)) {
          diff -= num;
        }

        // 4. Map the relative distance to your Tailwind styles
        let stateClasses = "";
        let zIndex = 0;

        if (diff === 0) {
          // Center Image
          stateClasses = "w-[400px] h-[224px] -translate-x-1/2 opacity-100 shadow-2xs";
          zIndex = 20;
        } else if (diff === -1) {
          // Left Image
          stateClasses = "w-[280px] h-[157px] -translate-x-[150%] opacity-100";
          zIndex = 10;
        } else if (diff === 1) {
          // Right Image
          stateClasses = "w-[280px] h-[157px] translate-x-[50%] opacity-100";
          zIndex = 10;
        } else if (diff < -1) {
          // Hidden Images (sliding away to the left)
          stateClasses = "w-[280px] h-[157px] -translate-x-[200%] opacity-0";
          zIndex = 0;
        } else if (diff > 1) {
          // Hidden Images (staging on the right)
          stateClasses = "w-[280px] h-[157px] translate-x-[100%] opacity-0";
          zIndex = 0;
        }

        return (
          <div
            key={img.id || index}
            // `transition-all` is the magic that makes the movement and resizing smooth
            className={`absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${stateClasses}`}
            style={{ zIndex }}
          >
            {/* Important: Apply w-full & h-full to the Image so it 
              stretches to fill the animating wrapper div. 
            */}
            <Image
              // isBlurred  <-- Add your NextUI specific props back here if needed
              // as={NextImage}
              src={img.src}
              alt={img.alt || "Carousel image"}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default InfiniteCarousel;
