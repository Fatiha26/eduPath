declare module "react-elastic-carousel" {
    import * as React from "react";
  
    export interface ReactElasticCarouselProps {
      breakPoints?: Array<{ width: number; itemsToShow: number }>;
      pagination?: boolean;
      enableAutoPlay?: boolean;
      autoPlaySpeed?: number;
      children?: React.ReactNode;
      showArrows?: boolean;
    }
  
    const ReactElasticCarousel: React.FC<ReactElasticCarouselProps>;
    export default ReactElasticCarousel;
  }
  