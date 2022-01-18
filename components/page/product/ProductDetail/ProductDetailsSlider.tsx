import { useContext, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ProductContext } from "context/ProductContext";
import SliderPagination from "components/ui/SliderPagination";

const ProductDetailsSlider = () => {
  const { product } = useContext(ProductContext);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slides] = useState<string[]>([
    product.image,
    "/products/Chair-Ekebol.png",
    "/products/Chair-Ingrid.png",
    "/products/Chair-Lallerod.png",
  ]);

  const handleNextSlide = () => {
    currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  };
  const handlePrevSlide = () => {
    currentSlide > 0 && setCurrentSlide(currentSlide - 1);
  };
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-[43px] relative h-[682px] flex justify-between items-center">
      <SliderPagination
        count={slides.length}
        active={currentSlide}
        onNext={() => handleNextSlide()}
        onPrevious={() => handlePrevSlide()}
        onSetPage={(page) => handleSlideChange(page)}
        vertical
      />

      <div className="w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.3,
              },
            }}
            className="relative w-[calc(100%-56px)] h-full"
          >
            <Image
              src={slides[currentSlide]}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              priority={true}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductDetailsSlider;
