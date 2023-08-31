import { motion } from "framer-motion";
import { fadeDown } from "../../motion";

interface Props {
  selectedIndex: number;
  navigateToNextProject: () => void;
  projectsCount: number;
}

export const ProjectPageBottomArrow = (props: Props) => {
  const { projectsCount, selectedIndex, navigateToNextProject } = props;

  const maxIndex = projectsCount - 1;

  return (
    <>
      {selectedIndex < maxIndex && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeDown(-20, 1)}
          onClick={navigateToNextProject}
          className="w-full h-full flex justify-center items-center"
        >
          <p className="text-4xl">&rsaquo;</p>
        </motion.div>
      )}
    </>
  );
};
