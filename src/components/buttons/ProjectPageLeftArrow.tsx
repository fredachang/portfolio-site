import { motion } from "framer-motion";
import { fadeX } from "../../motion";

interface Props {
  selectedIndex: number;
  navgateToPrevious: () => void;
}

export const ProjectPageLeftArrow = (props: Props) => {
  const { selectedIndex, navgateToPrevious } = props;

  return (
    <>
      {selectedIndex > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeX(20, 1)}
          className="flex justify-center items-center w-full h-full"
          onClick={navgateToPrevious}
        >
          <p className="rotate-180 text-4xl">&rsaquo;</p>
        </motion.div>
      ) : (
        <div className="h-8"></div>
      )}
    </>
  );
};
