import * as React from "react";
import useEmblaCarousel, { 
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { CarouselContext } from "./CarouselContext";
import Autoplay from 'embla-carousel-autoplay';

type CarouselApi = UseEmblaCarouselType[1];
type CarouselProps = {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  plugins?: Parameters<typeof useEmblaCarousel>[1];
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
      plugins = [],
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

    const finalPlugins = React.useMemo(() => {
      const pluginList = [...plugins];
      if (autoplayPlugin) {
        pluginList.push(autoplayPlugin);
      }
      return pluginList;
    }, [plugins, autoplayPlugin]);

    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      finalPlugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = React.useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;

      setCurrentIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!emblaApi) return;

      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);

      return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      };
    }, [emblaApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: emblaRef as React.MutableRefObject<HTMLDivElement>,
          api: emblaApi,
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