import { motion } from "framer-motion";
import { Project } from "../../types";
import { colour, type } from "../../tailwind-utils";
import { moveUpWhileHover, primaryTransition } from "../../motion";
import { useDetectScreenSize } from "../../hooks/useDetectScreenSize";

interface Props {
  isExpanded: boolean;
  project: Project;
}

export const ProjectIndex = (props: Props) => {
  const { isExpanded, project } = props;

  const { isSmallScreen } = useDetectScreenSize();

  const bgOnMobile = isSmallScreen && colour.sitePrimaryColour;

  return (
    <>
      <motion.div
        className={`${bgOnMobile} w-full`}
        whileHover={isExpanded ? { opacity: 1 } : moveUpWhileHover}
      >
        <motion.div
          layout="position"
          transition={primaryTransition}
          className="flex flex-col justify-between items-center w-full h-full py-4"
        >
          <div className="h-1/2 w-full flex justify-center items-start">
            <span className="barText">
              <h1 className={`font-light text-xl md:text-3xl`}>
                {project.title}
              </h1>
            </span>
          </div>

          <div
            className={`w-full flex flex-col justify-between h-1/2 md:h-2/5`}
          >
            <span className="barText">
              <h2 className={isSmallScreen ? type.linkSm : type.link}>
                {project.year}
              </h2>
            </span>

            <span className="barText">
              <div className="rotate-90 mb-5 flex text-stone-800 justify-center items-center">
                <h2 className={isSmallScreen ? type.linkSm : type.link}>
                  {project.id}
                </h2>
              </div>
              <h2 className={isSmallScreen ? type.linkSm : type.link}>
                {project.type}
              </h2>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
