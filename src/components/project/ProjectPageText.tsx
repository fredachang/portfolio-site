import { motion } from "framer-motion";
import { fade, fadeX } from "../../motion";
import { space, type } from "../../tailwind-utils";
import { Project } from "../../types";
import { useDetectScreenSize } from "../../hooks/useDetectScreenSize";

interface Props {
  selectedProject: Project;
  selectedIndex: number;
  filteredProjects: Project[];
  currentCarouselIndex: number;
  imagesCount: number;
  currentImageText: string;
}

export const ProjectPageText = (props: Props) => {
  const {
    selectedProject,
    selectedIndex,
    filteredProjects,
    currentCarouselIndex,
    imagesCount,
    currentImageText,
  } = props;

  const { isSmallScreen } = useDetectScreenSize();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fade(2, 0.5, 0)}
      className="flex flex-col justify-between w-full md:h-full px-4"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade(0.5, 0.5, 0)}
      >
        <div className={`${type.link} flex justify-between mt-4 md:mt-0 mb-6`}>
          <p>
            Project {selectedIndex + 1} / {filteredProjects.length}
          </p>
          <p>{selectedProject.year}</p>
          <p>{selectedProject.type}</p>
        </div>

        {!isSmallScreen && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fade(0.5, 0.5, 0.1)}
            className="font-light text-3xl mb-6 md:mb-0 md:text-6xl"
          >
            {selectedProject.title}
          </motion.p>
        )}
      </motion.div>

      <div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fade(0.5, 0.5, 0.2)}
          className={`font-light text-sm leading-4 md:text-md md:leading-5.5 mb-${space.spacingMd}`}
        >
          {selectedProject.description}
        </motion.p>

        <motion.div
          key={currentCarouselIndex}
          initial="hidden"
          animate="visible"
          variants={fadeX(-10, 1.5)}
        >
          <p className="text-xs mt-2 md:px-0 md:mt-0 mb-20 md:mb-0 md:text-xs font-mono leading-4 md:leading-4">{`Image[${
            currentCarouselIndex + 1
          }/${imagesCount}]: ${currentImageText}`}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
