import { motion } from "framer-motion";
import { Project } from "../types";
import { fade, fadeRightWithDelay, fadeUp, fadeX } from "../motion";
import { useNavigate, useParams } from "react-router-dom";
import { space, type } from "../tailwind-utils";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { useNavigateCarousel } from "../hooks/useNavigateIndex";
import { useRef } from "react";
import { Carousel } from "../components/other/Carousel";
import { ProjectPageNavHorizontal } from "../components/buttons/ProjectPageNavHorizontal";
import { ProjectPageTopArrow } from "../components/buttons/ProjectPageTopArrow";
import { ProjectPageBottomArrow } from "../components/buttons/ProjectPageBottomArrow";

interface Props {
  projects: Project[];
}

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { projects } = props;

  const navigate = useNavigate();
  const { currentIndex, setCurrentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateCarousel();

  const { screenWidth } = useDetectScreenWidth();
  const isMobile = screenWidth < 1000;
  const scrollToTopRef = useRef<HTMLDivElement | null>(null);

  const projectsCount = projects.length;
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
      setCurrentIndex(0);
      const previousProject = projects[previousIndex];
      const targetURL = `/project/${previousProject.title}`;
      navigate(targetURL, { replace: true });
    }
  };

  const navigateToNextProject = () => {
    if (nextIndex >= 0) {
      setCurrentIndex(0);
      const nextProject = projects[nextIndex];
      const targetURL = `/project/${nextProject.title}`;
      navigate(targetURL, { replace: true });
      if (scrollToTopRef.current) {
        scrollToTopRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <motion.div
        className="flex flex-col w-full h-86% px-6 overflow-scroll"
        initial="hidden"
        animate="visible"
        variants={fadeUp(100, 0.8)}
      >
        {isMobile ? (
          <ProjectPageNavHorizontal
            projectsCount={projectsCount}
            selectedIndex={selectedIndex}
            navigateToPreviousProject={navigateToPreviousProject}
            navigateToNextProject={navigateToNextProject}
          />
        ) : (
          <ProjectPageTopArrow
            selectedIndex={selectedIndex}
            navigateToPreviousProject={navigateToPreviousProject}
          />
        )}

        {isMobile && (
          <div className="mt-2">
            <div
              ref={scrollToTopRef}
              className={`${type.link} flex justify-between mb-2 pt-10 md:mt-0`}
            >
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
            className="w-full h-[300px] md:w-3/5 md:h-full overflow-hidden"
          >
            <Carousel
              key={selectedProject.title}
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
                  className={`font-light text-sm leading-4 md:text-md md:leading-5.5 mb-${space.spacingMd}`}
                >
                  {selectedProject.description}
                </p>
              )}

              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                variants={fadeX(-10, 1.5)}
              >
                <p className="text-xs mt-2 md:mt-0 mb-20 md:mb-0 md:text-xs font-mono leading-4 md:leading-4">{`Image[${
                  currentIndex + 1
                }/${imagesCount}]: ${currentImageText}`}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {!isMobile && (
          <ProjectPageBottomArrow
            projectsCount={projectsCount}
            selectedIndex={selectedIndex}
            navigateToNextProject={navigateToNextProject}
          />
        )}
      </motion.div>
    </>
  );
};
