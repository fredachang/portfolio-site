import { motion } from "framer-motion";
import { fadeX } from "../../motion";

interface Props {
  selectedIndex: number;
  navigateToNext: () => void;
  projectsCount: number;
}

export const ProjectPageRightArrow = (props: Props) => {
  const { projectsCount, selectedIndex, navigateToNext } = props;

  const maxIndex = projectsCount - 1;

  return (
    <>
      {selectedIndex < maxIndex && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeX(-20, 1)}
          onClick={navigateToNext}
          className="cursor-pointer w-full h-full flex justify-center items-center"
        >
          {/* <p className="text-4xl">&rsaquo;</p> */}
          <img
            className="w-full object-contain"
            src="/icons/starArrowBlackRight.png"
          />
        </motion.div>
      )}
    </>
  );
};
