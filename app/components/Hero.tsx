import { Divider } from '@heroui/divider'
import { notoSerif, rancho } from '../fonts/fonts'
import NextImage from 'next/image'
import { Image } from '@heroui/image'
import { Button } from '@heroui/button'
import { ArrowRight } from 'lucide-react'
import InfiniteCarousel from './InfiniteCarousel'

const Images = [
  { id: 1, src: "/static/image_03.png", alt: "dv-1" },
    { id: 2, src: "/static/image_01.png", alt: "dv-2" },
    { id: 3, src: "/static/image_02.jpg", alt: "dv-3" }
  ];

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-y-12 justify-center text-center mb-12'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className={`text-7xl font-medium text-white font-[Revamped] text-shadow-lg`}>
          Zenthos
        </h1>
        <div className='flex w-full justify-center items-center'>
          <Divider className='w-1/3 max-w-64 h-[2px] bg-white/50' />
          <Image
            src="/static/circle-fill.svg"
            alt="circle"
            width={12}
            height={12}
            as={NextImage}
          />
          <Divider className='w-1/3 max-w-64 h-[2px] bg-white/50' />
        </div>
        <p className={`mt-4 text-shadow-lg text-5xl text-[#ffffffcb] tracking-tight ${rancho.className}`}>
          Where Imagination Meets Reality
        </p>
      </div>
      <div className="flex flex-col items-center pt-10">
        <InfiniteCarousel
          images={Images}
          /* 5 second wait before cycling */
          intervalTime={5000}
          autoPlay={true}
        />
      </div>
      <div className='w-[600px]'>
        <p className={`${notoSerif.className} text-lg backdrop-filter backdrop-blur-sm border-1 bg-gray-100/10 border-white/10 rounded-xl p-2`}>
          &quot; At Zenthos, we believe in the power of imagination. Our games are crafted to blur the line between DREAMS and REALITY,
          sparking wonder and adventure with every interaction. Fueled by creativity and driven by innovation &quot;
        </p>
      </div>
      <div>
        <Button
          className='backdrop-filter backdrop-blur-sm border-1 bg-gray-100/15 border-white/10'
          size='lg'
          radius='full'
          endContent={
            <ArrowRight size={18} />
          }
        >Explore Games</Button>
      </div>
    </div>
  )
}

export default Hero
