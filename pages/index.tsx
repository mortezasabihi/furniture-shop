import type { NextPage } from "next";
import Head from "next/head";
import type { Data as HeroData } from "types/hero";
import type { Data as ProductsData } from "types/product";
import Hero from "components/page/home/hero";
import { HeroProvider } from "context/HeroContext";
import { ProductsContext } from "context/ProductsContext";
import Products from "components/page/home/products";
import fetcher from "utils/fetcher";

const Home: NextPage<{ hero: HeroData; products: ProductsData }> = ({
  hero,
  products,
}) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <HeroProvider initialData={hero.slides}>
        <Hero />
      </HeroProvider>

      <ProductsContext.Provider value={{ products: products.products }}>
        <Products />
      </ProductsContext.Provider>
    </>
  );
};

export async function getServerSideProps() {
  const hero = await fetcher<HeroData>("/hero");
  const products = await fetcher<ProductsData>("/products");

  return {
    props: {
      hero,
      products,
    },
  };
}

export default Home;
