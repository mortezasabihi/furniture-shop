import { createRef, useEffect, useState, useContext } from "react";
import { ProductContext } from "context/ProductContext";
import ProductDetailsLeft from "./ProductDetailsLeft";
import ProductDetailsRight from "./ProductDetailsRight";

const ProductDetail = () => {
  const containerRef = createRef<HTMLDivElement>();
  const [padding, setPadding] = useState(0);
  const { product } = useContext(ProductContext);

  useEffect(() => {
    const container = containerRef.current;
    if (container) setPadding(container.getClientRects()[0].x);
  }, [containerRef]);

  return (
    <div className="min-h-[calc(100vh-100px)] relative flex">
      <div className="flex flex-grow z-10">
        <ProductDetailsLeft padding={padding} />

        <ProductDetailsRight padding={padding} />
      </div>

      <div
        ref={containerRef}
        className="container z-0 flex absolute inset-0 pt-[30px] pb-[87px] invisible"
      />
    </div>
  );
};

export default ProductDetail;
