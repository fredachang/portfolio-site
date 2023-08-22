import { motion } from "framer-motion";
import { Project } from "../types";
import {
  fade,
  fadeDown,
  fadeRight,
  fadeRightWithDelay,
  fadeUp,
} from "../motion";
import { useNavigate, useParams } from "react-router-dom";
import { useNavigateIndex } from "../hooks/useNavigateIndex";
import { Carousel } from "../components/Carousel";
import { space, type } from "../tailwind-utils";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";

interface Props {
  projects: Project[];
}

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { projects } = props;

  const navigate = useNavigate();
  const { currentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateIndex();

  const { screenWidth } = useDetectScreenWidth();
  const isMobile = screenWidth < 1000;

  const selectedProject = projects.find((project) => project.title === title);

  if (!selectedProject) {
    return <div>Project not found.</div>;
  }

  const selectedIndex = projects.findIndex(
    (project) => project.title === title
  );

  const previousIndex = selectedIndex - 1;
  const nextIndex = selectedIndex + 1;

  const currentImageText = selectedProject.images[currentIndex].imageText;
  const imagesCount = selectedProject.images.length;

  const navigateToPreviousProject = () => {
    if (previousIndex >= 0) {
      const previousProject = projects[previousIndex];
      const targetURL = `/project/${previousProject.title}`;
      navigate(targetURL, { replace: true });
    }
  };

  const navigateToNextProject = () => {
    if (nextIndex >= 0) {
      const nextProject = projects[nextIndex];
      const targetURL = `/project/${nextProject.title}`;
      navigate(targetURL, { replace: true });
    }
  };

  return (
    <>
      <motion.div
        className="flex flex-col w-full h-86% px-5 overflow-scroll"
        initial="hidden"
        animate="visible"
        variants={fadeUp(100, 0.8)}
      >
        <div
          className={`flex justify-center items-center w-full h-${space.spacingXl} cursor-pointer`}
          onClick={navigateToPreviousProject}
        >
          {selectedIndex > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(20, 1)}
            >
              <p className="-rotate-90 text-3xl">&rsaquo;</p>
            </motion.div>
          ) : (
            <div className="h-8"></div>
          )}
        </div>

        {isMobile && (
          <div className="mt-2">
            <div className={`${type.link} flex justify-between mb-2`}>
              <p>{selectedProject.id}</p>
              <p>{selectedProject.year}</p>
              <p>{selectedProject.type}</p>
            </div>
            <p className="font-light text-3xl mb-4">{selectedProject.title}</p>
            <p
              className={`font-light text-xs leading-4 md:text-md md:leading-6 mb-${space.spacingMd}`}
            >
              {selectedProject.description}
            </p>
          </div>
        )}

        <div className="flex h-full flex-col md:flex-row relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRightWithDelay}
            className="w-full h-[400px] md:w-3/5 md:h-full overflow-hidden"
          >
            <Carousel
              images={selectedProject.images}
              currentIndex={currentIndex}
              handleGoToNext={handleGoToNext}
              handleGoToPrevious={handleGoToPrevious}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fade(2, 0.5)}
            className="flex flex-col justify-between md:px-4 w-full md:h-full md:h-full md:w-2/5"
          >
            {!isMobile && (
              <div>
                <div className={`${type.link} flex justify-between mb-6`}>
                  <p>{selectedProject.id}</p>
                  <p>{selectedProject.year}</p>
                  <p>{selectedProject.type}</p>
                </div>
                <p className="font-light text-3xl md:text-6xl">
                  {selectedProject.title}
                </p>
              </div>
            )}

            <div>
              {!isMobile && (
                <p
                  className={`font-light text-sm leading-4 md:text-md md:leading-6 mb-${space.spacingMd}`}
                >
                  {selectedProject.description}
                </p>
              )}

              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                variants={fadeRight(-10, 1.5)}
              >
                <p className="text-xs mt-2 md:mt-0 mb-4 md:mb-0 md:text-sm font-mono leading-4">{`Image[${
                  currentIndex + 1
                }/${imagesCount}]: ${currentImageText}`}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div
          className={`flex justify-center items-center w-full h-${space.spacingXl} cursor-pointer`}
          onClick={navigateToNextProject}
        >
          {selectedIndex < 7 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeDown(-20, 1)}
            >
              <p className="rotate-90 text-3xl">&rsaquo;</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};
