export interface Slide {
  title: string;
  category: string;
  price: number;
  image: string;
  color: string;
}

export type Data = {
  slides: Slide[];
};
