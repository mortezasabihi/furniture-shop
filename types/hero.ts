export interface Slide {
  title: string;
  category: string;
  price: number;
  image: StaticImageData;
  color: string;
}

export type Data = {
  slides: Slide[];
};
