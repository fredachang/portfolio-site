import { motion } from "framer-motion";
import { space } from "../../tailwind-utils";
import { fadeUp } from "../../motion";

interface Props {
  selectedIndex: number;
  navigateToPreviousProject: () => void;
}

export const ProjectPageTopArrow = (props: Props) => {
  const { selectedIndex, navigateToPreviousProject } = props;

  return (
    <div
      className={`flex justify-center items-center w-full h-${space.spacingXl} cursor-pointer`}
      onClick={navigateToPreviousProject}
    >
      {selectedIndex > 0 ? (
        <motion.div initial="hidden" animate="visible" variants={fadeUp(20, 1)}>
          <p className="-rotate-90 text-3xl">&rsaquo;</p>
        </motion.div>
      ) : (
        <div className="h-8"></div>
      )}
    </div>
  );
};
