import { useContext } from "react";
import { ProductsContext } from "context/ProductsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const products = useContext(ProductsContext);

  return (
    <div className="grid gap-4 grid-cols-3 mb-20">
      {products.products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
