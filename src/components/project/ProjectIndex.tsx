import { motion } from "framer-motion";
import { Project } from "../../types";
import { colour, space, type } from "../../tailwind-utils";
import { moveUpWhileHover } from "../../motion";
import { useDetectScreenSize } from "../../hooks/useDetectScreenSize";

interface Props {
  isExpanded: boolean;
  project: Project;
}

export const ProjectIndex = (props: Props) => {
  const { isExpanded, project } = props;

  const { isSmallScreen } = useDetectScreenSize();

  const bgOnMobile = isSmallScreen && colour.sitePrimaryColour;

  const expandedHeader = `${bgOnMobile} flex flex-col justify-between items-center w-10 md:w-24 py-${space.spacingMd} md:py-${space.spacingLg}`;
  const collapsedHeader = `${bgOnMobile} flex flex-col justify-between items-center w-full py-${space.spacingMd} md:py-${space.spacingLg}`;

  return (
    <>
      <motion.div
        className={isExpanded ? expandedHeader : collapsedHeader}
        whileHover={isExpanded ? { opacity: 1 } : moveUpWhileHover}
      >
        <div className="h-1/2 w-full flex justify-center items-start">
          <span className="barText">
            <h1 className={`font-light text-xl md:text-3xl`}>
              {project.title}
            </h1>
          </span>
        </div>

        <div className={`w-full flex flex-col justify-between h-1/2 md:h-2/5`}>
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
    </>
  );
};
