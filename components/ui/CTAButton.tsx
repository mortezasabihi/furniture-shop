import type { FC } from "react";
import { motion } from "framer-motion";

interface IProps {
  label: string | number;
}

const CTAButton: FC<IProps> = ({ label }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      className="uppercase text-2xl font-bold h-[70px] w-[260px] bg-[rgba(255,255,255,0.75)] rounded-full shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]"
    >
      {label}
    </motion.button>
  );
};

export default CTAButton;
