import { useState } from "react";
import { Image } from "../types";
import { motion } from "framer-motion";
import { carouselFade } from "../motion";

interface Props {
  images: Image[];
}

export const Carousel = (props: Props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const componentContainer = "w-full h-full relative";
  const imgContainingDiv = "w-full h-full bg-center bg-cover";
  const arrowContainer =
    "flex absolute bottom-0 pt-2 w-full h-20 justify-between z-10 text-stone-200 text-4xl";

  return (
    <>
      <div className={componentContainer}>
        <motion.div
          key={currentIndex}
          className={imgContainingDiv}
          style={{
            backgroundImage: `url(${images[currentIndex].imagePath})`,
          }}
          initial="hidden"
          animate="visible"
          variants={carouselFade}
        ></motion.div>

        {images.length > 1 && (
          <div className={arrowContainer}>
            <div onClick={goToPrevious} className="pl-2 w-24 cursor-pointer">
              &larr;
            </div>
            <div
              onClick={goToNext}
              className="pr-2 w-24 text-4xl text-right cursor-pointer"
            >
              &rarr;
            </div>
          </div>
        )}
      </div>
    </>
  );
};
