import { motion } from "framer-motion";
import { fadeDown } from "../motion";
import { space } from "../tailwind-utils";

interface Props {
  selectedIndex: number;
  navigateToNextProject: () => void;
}

export const ProjectPageBottomArrow = (props: Props) => {
  const { selectedIndex, navigateToNextProject } = props;

  return (
    <div
      className={`flex justify-center items-center w-full h-${space.spacingXl} cursor-pointer`}
      onClick={navigateToNextProject}
    >
      {selectedIndex < 7 && (
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
