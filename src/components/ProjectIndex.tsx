import { motion } from "framer-motion";
import { moveUpWhileHover } from "../motion";
import { Project } from "../types";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { colour, space, type } from "../tailwind-utils";

interface Props {
  isExpanded: boolean;
  project: Project;
}

export const ProjectIndex = (props: Props) => {
  const { isExpanded, project } = props;

  const { screenWidth } = useDetectScreenWidth();

  const sharedHeaderStyles = `${
    screenWidth < 1000 && colour.sitePrimaryColour
  } flex py-${space.spacingXl} flex-col justify-between items-center`;
  const expandedHeader = `${sharedHeaderStyles} pl-2 w-8 md:w-12 h-86% md:pl-0 md:h-full md:w-32 ${colour.textColorDark}`;
  const collapsedHeader = `${sharedHeaderStyles} w-full ${colour.textColorLight}`;

  return (
    <>
      <motion.div
        className={isExpanded ? expandedHeader : collapsedHeader}
        whileHover={isExpanded ? { opacity: 1 } : moveUpWhileHover}
      >
        <div className="h-1/2 w-full flex justify-center items-start">
          <span className="barText">
            <h1 className={`font-light text-2xl md:text-3xl`}>
              {project.title}
            </h1>
          </span>
        </div>

        <div className={`w-full flex flex-col justify-between h-1/2 md:h-2/5`}>
          <span className="barText">
            <h2 className={type.link}>{project.year}</h2>
          </span>

          <span className="barText">
            <div className="rotate-90 mb-5 flex text-stone-800 justify-center items-center w-10 h-10">
              <h2 className={type.link}>{project.id}</h2>
            </div>
            <h2 className={type.link}>{project.type}</h2>
          </span>
        </div>
      </motion.div>
    </>
  );
};
