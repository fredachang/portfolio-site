import { motion } from "framer-motion";
import { fadeX } from "../motion";

interface Props {
  selectedIndex: number;
  navigateToPreviousProject: () => void;
  navigateToNextProject: () => void;
}

export const ProjectPageNavHorizontal = (props: Props) => {
  const { selectedIndex, navigateToPreviousProject, navigateToNextProject } =
    props;
  return (
    <div className="flex absolute left-0 right-0 px-2 z-20 justify-between items-center w-full h-10">
      {selectedIndex > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeX(20, 1)}
          onClick={navigateToPreviousProject}
        >
          <p className="w-16 flex justify-end rotate-180 text-3xl mt-2">
            &rsaquo;
          </p>
        </motion.div>
      ) : (
        <div className="h-8"></div>
      )}
      {selectedIndex < 7 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeX(-20, 1)}
          onClick={navigateToNextProject}
        >
          <p className="w-16 flex justify-end text-3xl mb-0.5">&rsaquo;</p>
        </motion.div>
      )}
    </div>
  );
};
