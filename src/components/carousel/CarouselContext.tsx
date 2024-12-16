import * as React from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

interface CarouselContextType {
  carouselRef: ReturnType<typeof React.useRef<HTMLDivElement>>;
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollTo: (index: number) => void;
  currentIndex: number;
  scrollSnaps: number[];
  orientation?: "horizontal" | "vertical";
  opts?: any;
}

export const CarouselContext = React.createContext<CarouselContextType | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}