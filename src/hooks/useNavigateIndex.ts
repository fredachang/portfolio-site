import { useState } from "react";

export const useNavigateCarousel = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const handleGoToPrevious = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCurrentCarouselIndex(currentCarouselIndex - 1);
  };

  const handleGoToNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCurrentCarouselIndex(currentCarouselIndex + 1);
  };

  return {
    currentCarouselIndex,
    setCurrentCarouselIndex,
    handleGoToNext,
    handleGoToPrevious,
  };
};
