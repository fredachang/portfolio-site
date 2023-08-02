import { motion } from "framer-motion";
import { fadeXY } from "../motion";
import { Project } from "../types";
import { useState } from "react";

interface Props {
  project: Project;
}

export const ProjectTile = (props: Props) => {
  const { project } = props;
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const staticStyle = "bg-purple-100 border-x border-black flex-1";
  const expandedStyle = "bg-purple-100 border-x border-black w-4/5";

  return (
    <>
      <motion.div
        onClick={handleExpand}
        layout="position"
        transition={{ duration: 0.5 }}
        className={expand ? expandedStyle : staticStyle}
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
