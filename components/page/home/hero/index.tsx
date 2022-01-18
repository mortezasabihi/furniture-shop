import { useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeroDetails from "./HeroDetails";
import SliderPagination from "components/ui/SliderPagination";
import { HeroContext, HeroUpdateContext } from "context/HeroContext";

const Hero = () => {
  const hero = useContext(HeroContext);
  const heroUpdate = useContext(HeroUpdateContext);

  return (
    <AnimatePresence initial={false}>
      <div
        className="min-h-[calc(100vh-100px)] flex select-none"
        style={{ backgroundColor: hero.slides[hero.index].color }}
      >
        <div className="container flex relative flex-grow mb-[80px]">
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
            className="relative w-full flex-grow inset-0 z-0"
          >
            <Image
              src={hero.slides[hero.index].image}
              alt={hero.slides[hero.index].title}
              layout="fill"
              objectFit="contain"
              priority={true}
              draggable={false}
            />
          </motion.div>

          <div className="absolute bottom-0 right-0 ">
            <SliderPagination
              count={hero.slides.length}
              active={hero.index}
              onNext={heroUpdate.next}
              onPrevious={heroUpdate.prev}
              onSetPage={(page) => heroUpdate.setPage(page)}
            />
          </div>

          <HeroDetails />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
