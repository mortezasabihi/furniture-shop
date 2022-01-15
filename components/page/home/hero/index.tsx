import { useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeroDetails from "./HeroDetails";
import HeroPagination from "./HeroPagination";
import { HeroContext } from "context/HeroContext";

const Hero = () => {
  const hero = useContext(HeroContext);

  return (
    <AnimatePresence initial={false}>
      <div
        className="min-h-[calc(100vh-100px)] flex select-none"
        style={{ backgroundColor: hero.slides[hero.index].color }}
      >
        <div className="container relative flex-grow mb-[80px]">
          <motion.div
            key={hero.index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.3,
              },
            }}
            className="absolute height-full inset-0 z-0"
          >
            <Image
              src={hero.slides[hero.index].image.src}
              alt={hero.slides[hero.index].title}
              layout="fill"
              objectFit="contain"
              priority={true}
              draggable={false}
            />
          </motion.div>

          <HeroPagination />

          <HeroDetails />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
