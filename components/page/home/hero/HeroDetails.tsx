import { useContext } from "react";
import { motion } from "framer-motion";
import { HeroContext } from "context/HeroContext";

const HeroDetails = () => {
  const hero = useContext(HeroContext);

  return (
    <div className="absolute left-0 bottom-0 z-10">
      <div>
        <div className="leading-[29px] text-neutral-700">Working Chair</div>
        <motion.h2
          key={hero.index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 0.7,
            },
          }}
          className="text-[48px] font-extrabold mb-[23px] leading-[56px]"
        >
          {hero.slides[hero.index].title}
        </motion.h2>
        <div className="text-2xl leading-[29px] text-neutral-700">
          ${hero.slides[hero.index].price}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="uppercase mt-[66px] text-2xl font-bold h-[70px] w-[260px] bg-[rgba(255,255,255,0.75)] rounded-full shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]"
      >
        Buy
      </motion.button>
    </div>
  );
};

export default HeroDetails;
