import { AnimatePresence, motion } from "framer-motion";
import { fade, fadeXY, transitionSettings } from "../motion";
import { Project } from "../types";
import { Carousel } from "./Carousel";

interface Props {
  project: Project;
  isExpanded: boolean;
  handleExpand: (projectId: string) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpand } = props;

  //overall bar style
  const sharedStyles = "bg-stone-50 py-5 px-2 border-l border-black h-full";
  const staticStyle = `${sharedStyles} w-[150px]`;
  const expandedStyle = `${sharedStyles} w-[800px]`;

  //barheaderstyle

  const sharedHeaderStyles =
    "flex bg-stone-50 flex-col justify-between items-center h-full";
  const expandedHeader = `${sharedHeaderStyles} w-14`;
  const collapsedHeader = `${sharedHeaderStyles} text-stone-600 w-full`;

  //containers

  const flexBox1 = "flex flex-row h-full";
  const flexBox2 = "flex flex-row items-start w-[800px] h-full px-5";
  const imageContainer = "w-[700px] h-full overflow-hidden";
  const textContainer = "flex items-end h-full pl-2";

  return (
    <>
      <motion.div
        onClick={() => handleExpand(project.id)}
        layout="position"
        transition={transitionSettings}
        className={isExpanded ? expandedStyle : staticStyle}
      >
        <div className={flexBox1}>
          <div className={isExpanded ? expandedHeader : collapsedHeader}>
            <span className="barText">
              <h1>{project.title}</h1>
            </span>

            <span className="barText">
              <h2>{project.year}</h2>
            </span>

            <span className="barText">
              <h2>{project.type}</h2>
            </span>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <div className={flexBox2}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeXY}
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
        </div>
      </motion.div>
    </>
  );
};
