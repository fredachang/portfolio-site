import { motion } from "framer-motion";
import { fadeXY } from "../motion";
import { Project } from "../types";

interface Props {
  project: Project;
  isExpanded: boolean;
  handleExpand: (projectId: string) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpand } = props;

  //overall bar style
  const sharedStyles =
    "bg-stone-50 py-5 px-2 border-l border-black h-full overflow-x-hidden";
  const staticStyle = `${sharedStyles} flex-1`;
  const expandedStyle = `${sharedStyles} w-3/5`;

  //barheaderstyle

  const sharedHeaderStyles =
    "flex flex-col justify-between items-center h-full";
  const expandedHeader = `${sharedHeaderStyles} w-14`;
  const collapsedHeader = `${sharedHeaderStyles} w-full`;

  //containers

  const flexBox1 = "flex flex-row h-full";
  const imageContainer = "w-[600px] h-[600px] overflow-hidden";

  const transitionSettings = {
    duration: 3,
    ease: "easeIn",
    type: "spring",
    bounce: 0.05,
    damping: 20,
    stiffness: 30,
  };

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
              <h1 className="text-2xl">{project.title}</h1>
            </span>

            <span className="barText">
              <h2>{project.year}</h2>
            </span>

            <span className="barText">
              <h2>{project.type}</h2>
            </span>
          </div>

          {isExpanded && (
            <div className="px-5">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeXY}
                className={imageContainer}
              >
                <img className="max-w-fit" src={project.images[0].imagePath} />
              </motion.div>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};
