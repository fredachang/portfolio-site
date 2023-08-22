import { motion } from "framer-motion";
import { fadeRightWithDelay, moveRightWhileHover, scaleUp } from "../motion";
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
  const isMobile = screenWidth < 1000;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeRightWithDelay}
      className={`flex flex-col justify-between w-full md:w-1/2 h-1/3 md:h-full md:mx-${space.spacingMd}`}
    >
      {screenWidth > 1000 && (
        <Link to={`/project/${project.title}`} className="flex justify-end">
          <motion.div whileHover={scaleUp} className="w-8">
            <img className="w-full" src="/plus_symbol2.png" />
          </motion.div>
        </Link>
      )}

      <div>
        <p
          className={`font-light text-sm md:text-xs mt-4 md:mt-0 mb-${space.spacingMd}`}
        >
          {isMobile ? project.shortDescription : project.description}
        </p>

        <div className="flex">
          {project.links.map((link, i) => (
            <motion.a
              key={i}
              href={link.path}
              whileHover={moveRightWhileHover}
              target="_blank"
              className={`flex items-center ${type.link} h-6 mr-4`}
            >
              {link.text}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
