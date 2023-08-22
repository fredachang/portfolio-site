import { useState } from "react";

export const useNavigateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGoToPrevious = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex - 1);
  };

  const handleGoToNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex + 1);
  };

  return {
    currentIndex,
    handleGoToNext,
    handleGoToPrevious,
  };
};
