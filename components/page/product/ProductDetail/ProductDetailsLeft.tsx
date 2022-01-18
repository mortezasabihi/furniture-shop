import type { FC } from "react";
import { useContext } from "react";
import { ProductContext } from "context/ProductContext";
import Breadcrumb from "components/ui/Breadcrumb";
import ProductDetailsSlider from "./ProductDetailsSlider";
import CTAButton from "components/ui/CTAButton";

interface IProps {
  padding: number;
}

const ProductDetailsLeft: FC<IProps> = ({ padding }) => {
  const {
    product: { color, category, title, price },
  } = useContext(ProductContext);

  return (
    <div
      style={{ paddingLeft: `${padding}px`, backgroundColor: color }}
      className="w-7/12 flex"
    >
      <div className="container flex-grow pr-[138px] pt-[30px] pb-[87px]">
        <Breadcrumb
          items={["Home", "Collection", "New Arrivals", "Leifarne"]}
        />

        <div>
          <ProductDetailsSlider />

          <div className="mt-[26px] flex items-center justify-between">
            <div>
              <div className="text-2xl mb-[13px] font-light text-neutral-700">
                {category}
              </div>
              <h2 className="font-extrabold text-5xl mb-[23px]">{title}</h2>
              <div className="text-2xl font-light">${price}</div>
            </div>

            <div>
              <CTAButton label="Buy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLeft;
