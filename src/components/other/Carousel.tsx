import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fade } from "../../motion";
import { Image } from "../../types";

interface Props {
  images: Image[];
  currentIndex: number;
  handleGoToPrevious: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleGoToNext: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Carousel = (props: Props) => {
  const { images, currentIndex, handleGoToPrevious, handleGoToNext } = props;

  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    setCurrentImages(images);
  }, [images]);

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
          {currentImages.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              {img.imagePath.toLowerCase().endsWith(".mp4") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={img.imagePath} type="video/mp4" />
                </video>
              ) : (
                <div
                  key={i}
                  className="w-full h-full flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.imagePath})` }}
                />
              )}
            </div>
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
                  variants={fade(0.8, 0.3, 0)}
                  onClick={handleGoToPrevious}
                  className="absolute flex items-center left-0 pl-2 w-24 h-24 cursor-pointer"
                >
                  <div className="w-7 md:w-8 -rotate-180">
                    <img
                      className="cursor-fancy w-full object-contain"
                      src="/arrowSharp.png"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {currentIndex < images.length - 1 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fade(0.8, 0.3, 0)}
                  onClick={handleGoToNext}
                  className="absolute flex items-center justify-end right-0 w-24 h-24 pr-2 cursor-pointer"
                >
                  <div className="w-7 md:w-8">
                    <img
                      className="cursor-fancy w-full object-contain"
                      src="/arrowSharp.png"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </>
  );
};
