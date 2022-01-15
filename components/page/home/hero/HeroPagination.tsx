import { useContext } from "react";
import { motion } from "framer-motion";
import { HeroContext, HeroUpdateContext } from "context/HeroContext";

const HeroPagination = () => {
  const hero = useContext(HeroContext);
  const heroUpdate = useContext(HeroUpdateContext);

  return (
    <ul className="absolute bottom-0 right-0 flex items-center z-10">
      <li className="mr-[16px]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={heroUpdate.prev}
          type="button"
          data-testid="prev-button"
          disabled={hero.index === 0}
          className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.7)] disabled:opacity-[30%] disabled:cursor-not-allowed"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#000000"
              d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"
            />
          </svg>
        </motion.button>
      </li>

      {hero.slides.map((_, index) => (
        <li
          key={index}
          className="flex items-center mr-[8px] last-of-type:mr-0"
        >
          <button
            onClick={() => heroUpdate.setPage(index)}
            type="button"
            className={`w-[24px] h-[4px] rounded-[4px] ${
              index === hero.index ? "bg-neutral-700" : "bg-white opacity-[30%]"
            }`}
          >
            <span className="sr-only">{index + 1}</span>
          </button>
        </li>
      ))}

      <li className="ml-[16px]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={heroUpdate.next}
          type="button"
          data-testid="next-slide"
          disabled={hero.index === hero.slides.length - 1}
          className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.7)] disabled:opacity-[30%] disabled:cursor-not-allowed"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#000000"
              d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"
            />
          </svg>
        </motion.button>
      </li>
    </ul>
  );
};

export default HeroPagination;
