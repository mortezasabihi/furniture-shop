import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "types/product";

interface IProps {
  product: Product;
}

const ProductCard: FC<IProps> = ({
  product: { color, title, type, image, slug },
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHoverd, setIsButtonHoverd] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: color }}
      className={`${
        type === "chair" ? "col-span-1" : "col-span-2"
      } h-[640px] rounded-[4px] px-[138px] pt-[82px] pb-[80px] flex`}
    >
      <div className="flex flex-grow flex-col justify-between items-center relative">
        <h4
          className={`text-[28px] font-extrabold ${
            type === "sofa" ? "self-start" : "self-center"
          }`}
        >
          {title}
        </h4>

        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -10 : 0,
            transition: {
              duration: 0.3,
            },
          }}
          className={`relative w-full flex-grow inset-0 z-0 ${
            type === "sofa" ? "mr-[20%]" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            draggable={false}
          />
        </motion.div>

        <Link href="/products/[slug]" as={`/products/${slug}`} passHref>
          <motion.a
            className={`flex items-center text-[17px] font-bold relative [transform-style:preserve-3d] after:content-[''] after:w-16 after:h-16 after:bg-white after:rounded-full after:absolute after:-left-1/2 after:top-1/2 after:-translate-y-1/2 after:[transform:translateZ(-1px)_translate(45%,-50%)] ${
              type === "sofa" ? "self-end" : "self-center"
            }`}
            onMouseEnter={() => setIsButtonHoverd(true)}
            onMouseLeave={() => setIsButtonHoverd(false)}
          >
            More Info
            <motion.svg
              animate={{
                x: isButtonHoverd ? 8 : 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className="ml-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="28.444"
              height="16"
              viewBox="0 0 28.444 16"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M47.443,992.361a.814.814,0,0,0-.194-.556l-5.778-7.111a.912.912,0,0,0-1.278-.133.875.875,0,0,0-.1,1.244l4.6,5.667h-24.8a.889.889,0,1,0,0,1.778h24.8l-4.6,5.666a.919.919,0,0,0,.12,1.3.984.984,0,0,0,1.255-.186l5.778-7.111A.75.75,0,0,0,47.443,992.361Z"
                transform="translate(-19 -984.361)"
              />
            </motion.svg>
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
