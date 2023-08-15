import { useState } from "react";
import { Image } from "../types";
import { AnimatePresence, motion } from "framer-motion";
import { fade } from "../motion";

interface Props {
  images: Image[];
}

export const Carousel = (props: Props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGoToPrevious = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex - 1);
  };

  const handleGoToNext = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCurrentIndex(currentIndex + 1);
  };

  const arrowContainer =
    "flex absolute bottom-0 pt-2 w-full h-20 z-10 text-stone-400 text-4xl";

  return (
    <>
      <div className="w-full h-full relative">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          {images.map((img) => (
            <div
              key={img.imageId}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img.imagePath})` }}
            />

            // <img
            //   key={img.imageId}
            //   src={img.imagePath}
            //   className="aspect-[1/1] object-cover"
            // />
          ))}
        </motion.div>

        {images.length > 1 && (
          <div className={arrowContainer}>
            <AnimatePresence>
              {currentIndex > 0 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fade(0.8, 0.3)}
                  onClick={handleGoToPrevious}
                  className="left-0 pl-2 w-24 cursor-pointer"
                >
                  &larr;
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {currentIndex < images.length - 1 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fade(0.8, 0.3)}
                  onClick={handleGoToNext}
                  className="absolute right-0 h-20 pr-2 w-24 text-4xl text-right cursor-pointer"
                >
                  &rarr;
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </>
  );
};
