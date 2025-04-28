
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = UseEmblaCarouselType;
type CarouselOptions = EmblaOptionsType;
type CarouselPlugin = EmblaPluginType;

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin[];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

export interface CarouselContextProps extends CarouselProps {
  carouselRef: UseEmblaCarouselType[0];
  api: UseEmblaCarouselType[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export type CarouselButtonProps = ComponentPropsWithoutRef<typeof Button>;

export type {
  CarouselApi,
  CarouselOptions,
  CarouselPlugin,
};
