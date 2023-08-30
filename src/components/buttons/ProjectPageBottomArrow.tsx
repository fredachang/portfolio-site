import { motion } from "framer-motion";
import { fadeDown } from "../../motion";
import { space } from "../../tailwind-utils";

interface Props {
  selectedIndex: number;
  navigateToNextProject: () => void;
  projectsCount: number;
}

export const ProjectPageBottomArrow = (props: Props) => {
  const { projectsCount, selectedIndex, navigateToNextProject } = props;

  const maxIndex = projectsCount - 1;

  return (
    <div
      className={`flex justify-center items-center w-full h-${space.spacingXl} cursor-pointer`}
      onClick={navigateToNextProject}
    >
      {selectedIndex < maxIndex && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeDown(-20, 1)}
        >
          <p className="rotate-90 text-3xl">&rsaquo;</p>
        </motion.div>
      )}
    </div>
  );
};
