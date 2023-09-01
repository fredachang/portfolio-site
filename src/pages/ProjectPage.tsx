import { motion } from "framer-motion";
import { Project } from "../types";
import { fade, fadeRightWithDelay, fadeX } from "../motion";
import { useNavigate, useParams } from "react-router-dom";
import { space, type } from "../tailwind-utils";
import { useNavigateCarousel } from "../hooks/useNavigateIndex";
import { useRef } from "react";
import { Carousel } from "../components/other/Carousel";
import { ProjectPageNavHorizontal } from "../components/buttons/ProjectPageNavHorizontal";
import { ProjectPageTopArrow } from "../components/buttons/ProjectPageTopArrow";
import { ProjectPageBottomArrow } from "../components/buttons/ProjectPageBottomArrow";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
  filteredProjects: Project[];
}

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { filteredProjects } = props;

  const navigate = useNavigate();
  const {
    currentCarouselIndex,
    setCurrentCarouselIndex,
    handleGoToNext,
    handleGoToPrevious,
  } = useNavigateCarousel();

  const { screenWidth } = useDetectScreenSize();
  const isMobile = screenWidth < 1000;
  const scrollToTopRef = useRef<HTMLDivElement | null>(null);

  const projectsCount = filteredProjects.length;
  const selectedProject = filteredProjects.find(
    (filteredProjects) => filteredProjects.title === title
  );

  if (!selectedProject) {
    return <div>Project not found.</div>;
  }

  const selectedIndex = filteredProjects.findIndex(
    (filteredProjects) => filteredProjects.title === title
  );

  const previousIndex = selectedIndex - 1;
  const nextIndex = selectedIndex + 1;

  const currentImageText =
    selectedProject.images[currentCarouselIndex].imageText;
  const imagesCount = selectedProject.images.length;

  const navigateToPreviousProject = () => {
    if (previousIndex >= 0) {
      setCurrentCarouselIndex(0);
      const previousProject = filteredProjects[previousIndex];
      const targetURL = `/project/${previousProject.title}`;
      navigate(targetURL, { replace: true });
    }
  };

  const navigateToNextProject = () => {
    if (nextIndex >= 0) {
      setCurrentCarouselIndex(0);
      const nextProject = filteredProjects[nextIndex];
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
      <div
        key={selectedProject.id}
        className={`bg-red-100 flex flex-col md:flex-row w-full h-full md:h-6/8 md:px-2 md:py-6 overflow-scroll`}
      >
        {isMobile ? (
          <ProjectPageNavHorizontal
            projectsCount={projectsCount}
            selectedIndex={selectedIndex}
            navigateToPreviousProject={navigateToPreviousProject}
            navigateToNextProject={navigateToNextProject}
          />
        ) : (
          <div className="w-12 cursor-fancy">
            <ProjectPageTopArrow
              selectedIndex={selectedIndex}
              navigateToPreviousProject={navigateToPreviousProject}
            />
          </div>
        )}

        {isMobile && (
          <div className="mt-2 px-10">
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

        <div className="md:w-full flex h-full flex-col md:flex-row relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRightWithDelay}
            className="w-full h-[300px] md:w-3/5 md:h-full overflow-hidden"
          >
            <Carousel
              key={selectedProject.title}
              images={selectedProject.images}
              currentIndex={currentCarouselIndex}
              handleGoToNext={handleGoToNext}
              handleGoToPrevious={handleGoToPrevious}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fade(2, 0.5, 0)}
            className="flex flex-col justify-between md:px-4 w-full md:w-2/5 md:h-full "
          >
            {!isMobile && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fade(0.5, 0.5, 0)}
              >
                <div className={`${type.link} flex justify-between mb-6`}>
                  <p>
                    Project {selectedIndex + 1} / {filteredProjects.length}
                  </p>
                  <p>{selectedProject.year}</p>
                  <p>{selectedProject.type}</p>
                </div>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fade(0.5, 0.5, 0.1)}
                  className="font-light text-3xl md:text-6xl"
                >
                  {selectedProject.title}
                </motion.p>
              </motion.div>
            )}

            <div>
              {!isMobile && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fade(0.5, 0.5, 0.2)}
                  className={`font-light text-sm leading-4 md:text-md md:leading-5.5 mb-${space.spacingMd}`}
                >
                  {selectedProject.description}
                </motion.p>
              )}

              <motion.div
                key={currentCarouselIndex}
                initial="hidden"
                animate="visible"
                variants={fadeX(-10, 1.5)}
              >
                <p className="text-xs mt-2 px-10 md:mt-0 mb-20 md:mb-0 md:text-xs font-mono leading-4 md:leading-4">{`Image[${
                  currentCarouselIndex + 1
                }/${imagesCount}]: ${currentImageText}`}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {!isMobile && (
          <div className="w-12 cursor-fancy">
            <ProjectPageBottomArrow
              projectsCount={projectsCount}
              selectedIndex={selectedIndex}
              navigateToNextProject={navigateToNextProject}
            />
          </div>
        )}
      </div>
    </>
  );
};
