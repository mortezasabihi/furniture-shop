import { createContext } from "react";
import { Product } from "types/product";

interface IProductContext {
  product: Product;
}

const initialState: IProductContext = {
  product: {
    title: "",
    category: "",
    slug: "",
    type: "chair",
    image: "",
    color: "",
    price: 0,
  },
};

export const ProductContext = createContext<IProductContext>(initialState);
