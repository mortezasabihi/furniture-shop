import type { FC } from "react";
import { motion } from "framer-motion";

interface IProps {
  active: number;
  count: number;
  onNext: () => void;
  onPrevious: () => void;
  onSetPage: (value: number) => void;
  vertical?: boolean;
}

const SliderPagination: FC<IProps> = ({
  active,
  count,
  onNext,
  onPrevious,
  onSetPage,
  vertical = false,
}) => {
  return (
    <ul
      className={`flex items-center z-10 ${
        vertical ? "flex-col-reverse" : "flex-row"
      }`}
    >
      <li className={`${vertical ? "mt-4" : "mr-4"}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onPrevious()}
          type="button"
          data-testid="prev-button"
          disabled={active === 0}
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

      {Array.from({ length: count }, (_, i) => i + 1).map((_, index) => (
        <li
          key={index}
          className={`flex items-center ${vertical ? "mb-2" : "mr-2"} 
          ${vertical && index === 0 ? "mb-0" : ""}
          ${!vertical && index === count - 1 ? "mr-0" : ""}
          `}
        >
          <button
            onClick={() => onSetPage(index)}
            type="button"
            className={`${vertical ? "w-1 h-6" : "w-6 h-1"} rounded-[4px] ${
              index === active ? "bg-neutral-700" : "bg-white opacity-[30%]"
            }`}
          >
            <span className="sr-only">{index + 1}</span>
          </button>
        </li>
      ))}

      <li className={`${vertical ? "mb-4" : "ml-4"}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onNext()}
          type="button"
          data-testid="next-slide"
          disabled={active === count - 1}
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

export default SliderPagination;
