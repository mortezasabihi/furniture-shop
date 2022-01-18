import type { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import fetcher from "utils/fetcher";
import type { ProductData } from "types/product";
import { ProductContext } from "context/ProductContext";
import ProductDetail from "components/page/product/ProductDetail";

const Product: NextPage<{ product: ProductData }> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Product - {product.product.title}</title>
      </Head>

      <ProductContext.Provider value={{ product: product.product }}>
        <ProductDetail />
      </ProductContext.Provider>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const product = await fetcher<ProductData>(
      `/products/${context.params?.slug}`
    );

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

export default Product;
