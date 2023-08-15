import { motion } from "framer-motion";
import { moveUpWhileHover } from "../motion";
import { commonStyles } from "../tailwind-utils";
import { Project } from "../types";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";

interface Props {
  isExpanded: boolean;
  project: Project;
}

export const ProjectIndex = (props: Props) => {
  const { isExpanded, project } = props;

  const { screenWidth } = useDetectScreenWidth();

  const sharedHeaderStyles = `${
    screenWidth < 1000 && commonStyles.sitePrimaryColour
  } flex py-5 flex-col justify-between items-center`;
  const expandedHeader = `${sharedHeaderStyles} pl-2 w-8 md:w-12 h-86% md:pl-0 md:h-full md:w-32 ${commonStyles.textColorDark}`;
  const collapsedHeader = `${sharedHeaderStyles} w-full ${commonStyles.textColorLight}`;

  return (
    <>
      <motion.div
        className={isExpanded ? expandedHeader : collapsedHeader}
        whileHover={isExpanded ? { opacity: 1 } : moveUpWhileHover}
      >
        <span className="projectTitle">
          <h1 className={commonStyles.h1}>{project.title}</h1>
        </span>

        <div className="flex flex-col justify-between h-40% md:h-1/3">
          <span className="barText">
            <h2 className={commonStyles.p}>{project.year}</h2>
          </span>

          <span className="barText">
            <div className="rotate-90 mb-5 flex text-stone-800 justify-center items-center w-10 h-10">
              <h2 className={commonStyles.p}>{project.id}</h2>
            </div>
            <h2 className={commonStyles.p}>{project.type}</h2>
          </span>
        </div>
      </motion.div>
    </>
  );
};
