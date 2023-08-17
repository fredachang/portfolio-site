import { motion } from "framer-motion";
import { fadeRightWithDelay, moveRightWhileHover } from "../motion";
import { space, type } from "../tailwind-utils";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { Link } from "react-router-dom";
import { Project } from "../types";

interface Props {
  project: Project;
}

export const ProjectText = (props: Props) => {
  const { project } = props;
  const { screenWidth } = useDetectScreenWidth();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeRightWithDelay}
      className={`flex flex-col justify-end w-full md:w-1/2 h-1/3 md:h-full md:mx-${space.spacingMd}`}
    >
      <p className={`${type.sm} mb-${space.spacingMd}`}>
        {project.description}
      </p>

      {project.links.map((link, i) => (
        <motion.a
          key={i}
          href={link.path}
          whileHover={moveRightWhileHover}
          target="_blank"
          className={`flex items-center ${type.link} w-full h-6`}
        >
          {link.text}
        </motion.a>
      ))}

      {screenWidth > 1000 && (
        <Link to={`/project/${project.title}`} className="w-full">
          <motion.p
            whileHover={moveRightWhileHover}
            className={`flex items-end ${type.link} w-full h-6`}
          >
            MORE
          </motion.p>
        </Link>
      )}
    </motion.div>
  );
};
