import { motion } from "framer-motion";
import { fadeRightWithDelay, moveRightWhileHover } from "../motion";
import { Carousel } from "./Carousel";
import { space, type } from "../tailwind-utils";
import { Project } from "../types";
import { useNavigateIndex } from "../hooks/useNavigateIndex";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

export const ProjectOverview = (props: Props) => {
  const { project } = props;

  const { currentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateIndex();
  const { screenWidth } = useDetectScreenWidth();

  return (
    <div
      className={`bg-purple-100 w-4/5 h-full flex flex-col items-start md:flex-row md:h-full py-${space.spacingLg}`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeRightWithDelay}
        className={`w-full h-full md:h-full md:w-[600px] md:h-full overflow-x-hidden`}
      >
        <Carousel
          images={project.images}
          currentIndex={currentIndex}
          handleGoToNext={handleGoToNext}
          handleGoToPrevious={handleGoToPrevious}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeRightWithDelay}
        className="flex w-full h-20 md:w-1/3 flex-col justify-end md:h-full"
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
    </div>
  );
};
