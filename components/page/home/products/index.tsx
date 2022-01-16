import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <section className="container mt-[88px]">
      <h3 className="text-center text-5xl mb-[82px]">
        <span>Lean </span>
        <span className="font-light text-[rgba(0,0,0,0.3)]">too far</span>
      </h3>

      <ProductsList />
    </section>
  );
};

export default Products;
