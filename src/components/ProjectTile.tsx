import { AnimatePresence, motion } from "framer-motion";
import {
  fadeXYWithDelay,
  moveUpWhileHover,
  primaryTransition,
} from "../motion";
import { Project } from "../types";
import { Carousel } from "./Carousel";
import { commonStyles } from "../tailwind-utils";
import { ProjectIndex } from "./ProjectIndex";

interface Props {
  project: Project;
  isExpanded: boolean;
  handleExpand: (projectId: string) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpand } = props;

  //overall index style
  const sharedStyles = `${commonStyles.sitePrimaryColour} px-2 border-l border-black h-full`;
  const staticStyle = `${sharedStyles} w-[150px]`;
  const expandedStyle = `${sharedStyles} w-[800px]`;

  //containers

  const flexBox1 = "flex flex-row h-full";
  const flexBox2 = "flex flex-row items-start w-full h-full px-5";
  const imageContainer = "w-[700px] h-full overflow-hidden";
  const textContainer = "flex items-end h-full pl-2";

  return (
    <>
      <motion.div
        onClick={() => handleExpand(project.id)}
        whileHover={isExpanded ? { opacity: 1 } : moveUpWhileHover}
        layout="position"
        transition={primaryTransition}
        className={isExpanded ? expandedStyle : staticStyle}
      >
        <section className={flexBox1}>
          <ProjectIndex isExpanded={isExpanded} project={project} />

          <AnimatePresence>
            {isExpanded && (
              <div className={flexBox2}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeXYWithDelay}
                  className={imageContainer}
                >
                  <Carousel images={project.images} />
                </motion.div>

                <div className={textContainer}>
                  <p className="text-xs">{project.description}</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </section>
      </motion.div>
    </>
  );
};
