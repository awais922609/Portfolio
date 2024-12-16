import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { CarouselContext } from "./CarouselContext";
import Autoplay from 'embla-carousel-autoplay';

type CarouselApi = UseEmblaCarouselType[1];
type CarouselProps = {
  opts?: any;
  plugins?: any;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children: React.ReactNode;
  autoplay?: boolean;
  delayMs?: number;
};

const CarouselRoot = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      autoplay = true,
      delayMs = 5000,
      ...props
    },
    ref
  ) => {
    const autoplayPlugin = React.useMemo(
      () =>
        autoplay &&
        Autoplay({
          delay: delayMs,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      [autoplay, delayMs]
    );

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      [autoplayPlugin, ...(plugins || [])]
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);
    const scrollTo = React.useCallback((index: number) => api?.scrollTo(index), [api]);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;

      setCurrentIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!api) return;

      setScrollSnaps(api.scrollSnapList());
      onSelect(api);
      api.on("select", onSelect);
      api.on("reInit", onSelect);

      return () => {
        api.off("select", onSelect);
        api.off("reInit", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          scrollTo,
          currentIndex,
          scrollSnaps,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

CarouselRoot.displayName = "Carousel";

export { CarouselRoot };