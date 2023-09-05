import { AnimatePresence, motion } from "framer-motion";
import { fade } from "../../motion";
import { Image } from "../../types";
import { useLocation } from "react-router-dom";

interface Props {
  images: Image[];
  currentIndex: number;
  handleGoToPrevious: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleGoToNext: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CarouselArrows = (props: Props) => {
  const { currentIndex, handleGoToNext, handleGoToPrevious, images } = props;

  const location = useLocation();
  const filePath = location.pathname;
  const isProjectPage = filePath !== "/";

  const arrowWidth = isProjectPage ? "w-10" : "w-8";

  return (
    <div
      className={`flex absolute bottom-0 pt-2 w-full h-20 z-10 text-stone-400 text-4xl`}
    >
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
            <div className={`w-7 md:${arrowWidth}`}>
              <img
                className="w-full object-contain"
                src="/icons/starArrowLeft.png"
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
            <div className={`w-7 md:${arrowWidth}`}>
              <img
                className="cursor-fancy w-full object-contain"
                src="/icons/starArrowRight.png"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
