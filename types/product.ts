export interface Product {
  title: string;
  category: string;
  price: number;
  image: string;
  color: string;
  type: "sofa" | "chair";
  slug: string;
}

export type Data = {
  products: Product[];
};
