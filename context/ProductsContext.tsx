import { createContext } from "react";
import { Product } from "types/product";

interface IProductsContext {
  products: Product[];
}

const initialState: IProductsContext = {
  products: [],
};

export const ProductsContext = createContext<IProductsContext>(initialState);
