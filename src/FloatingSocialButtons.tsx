import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Tooltip } from "@heroui/react";
import { UilDiscord } from './Icons/UilDiscord';
import { UilGithub } from './Icons/UilGitub';
import { UilTwitter } from './Icons/UilTwitter';
import { UilWhatsapp } from './Icons/UilWhatsapp';
import { UilYoutube } from './Icons/UilYoutube';
import UilBrokenGlobe from './Icons/UilBorkenGlobe';
import UilGlobe from './Icons/UilGlobe';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialButtons = [
    { icon: <UilWhatsapp height={26} width={26} />, label: "WhatsApp", link: "#" },
    { icon: <UilGithub height={26} width={26} />, label: "Github", link: "https://github.com/ZenthosDEV" },
    { icon: <UilDiscord height={26} width={26} />, label: "Discord", link: "https://discord.gg/KhN8BBtGYD" },
    { icon: <UilYoutube height={26} width={26} />, label: "YouTube", link: "#" },
    { icon: <UilTwitter height={26} width={26} />, label: "Twitter", link: "#" },
  ];

  return (
    <div className="fixed bottom-10 right-4 flex flex-col items-end gap-2" style={{ zIndex: 999 }}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
          className="flex flex-col gap-2"
        >
          {socialButtons.map(({ icon, label, link }, index) => (
            <Tooltip key={index} className="capitalize bg-red-800 text-white" placement="left" content={label}>
              <Button
                onPress={() => link !== "#" && window.open(link, "_blank")}
                isIconOnly
                size='lg'
                className="flex items-center justify-center bg-[#990d0f] text-white"
                radius="full"
              >
                {icon}
              </Button>
            </Tooltip>
          ))}
        </motion.div>
      )}

      {/* Toggle Button */}
      <Button
        isIconOnly
        size='lg'
        className="bg-red-700 text-white flex items-center justify-center"
        radius="full"
        onPress={() => setIsOpen(!isOpen)}
      >
        {isOpen ?  <UilBrokenGlobe/> : <UilGlobe/>}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
