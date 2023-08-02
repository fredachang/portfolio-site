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

  const sharedStyles =
    "bg-stone-50 py-10 px-2 border-l border-black h-full overflow-x-hidden";
  const staticStyle = `${sharedStyles} flex-1`;
  const expandedStyle = `${sharedStyles} w-3/5`;

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
        <h1>{project.title}</h1>
        <h2>{project.year}</h2>
        <h2>{project.type}</h2>
        <p>{project.description}</p>
        <motion.div initial="hidden" animate="visible" variants={fadeXY}>
          <img className="w-20 h-20" src={project.images[0].imagePath} />
        </motion.div>
      </motion.div>
    </>
  );
};
