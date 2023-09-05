import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Image } from "../../types";
import { CarouselArrows } from "../buttons/CarouselArrows";

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
          <CarouselArrows
            currentIndex={currentIndex}
            handleGoToPrevious={handleGoToPrevious}
            handleGoToNext={handleGoToNext}
            images={images}
          />
        )}
      </div>
    </>
  );
};
