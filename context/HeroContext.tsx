import { createContext, ReactNode, useState } from "react";
import { Slide } from "types/hero";

interface IHeroContext {
  slides: Slide[];
  index: number;
}
interface IHeroUpdateContext {
  next: () => void;
  prev: () => void;
  setPage: (index: number) => void;
}

const initialState: IHeroContext = {
  slides: [],
  index: 0,
};

export const HeroContext = createContext<IHeroContext>(initialState);
export const HeroUpdateContext = createContext<IHeroUpdateContext>({
  next: () => {},
  prev: () => {},
  setPage: () => {},
});

export function HeroProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: Slide[];
}) {
  const [slides] = useState<Slide[]>(initialData);
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const setPage = (index: number) => {
    setIndex(index);
  };

  return (
    <HeroContext.Provider value={{ slides, index }}>
      <HeroUpdateContext.Provider value={{ next, prev, setPage }}>
        {children}
      </HeroUpdateContext.Provider>
    </HeroContext.Provider>
  );
}
