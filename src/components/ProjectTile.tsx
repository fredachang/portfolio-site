import { motion } from "framer-motion";
import { fadeXY } from "../motion";
import { Project } from "../types";

interface Props {
  project: Project;
  isExpanded: boolean;
  onExpand: (projectId: string) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, onExpand } = props;

  const handleExpand = () => {
    onExpand(project.id);
  };

  const sharedStyles =
    "bg-red-50 py-10 px-2 border-l border-black h-full overflow-x-hidden";
  const staticStyle = `${sharedStyles} flex-1`;
  const expandedStyle = `${sharedStyles} w-3/5`;

  return (
    <>
      <motion.div
        onClick={handleExpand}
        layout="position"
        transition={{ duration: 0.5 }}
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
