import { motion } from "framer-motion";
import { Project } from "../types";
import { fadeRightWithDelay } from "../motion";
import { useNavigate, useParams } from "react-router-dom";
import { useNavigateCarousel } from "../hooks/useNavigateIndex";
import { useRef } from "react";
import { Carousel } from "../components/other/Carousel";
import { ProjectPageLeftArrow } from "../components/buttons/ProjectPageLeftArrow";
import { ProjectPageRightArrow } from "../components/buttons/ProjectPageRightArrow";
import { ProjectPageText } from "../components/project/ProjectPageText";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
  filteredProjects: Project[];
  bgHex: string;
}

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { filteredProjects, bgHex } = props;

  const navigate = useNavigate();
  const {
    currentCarouselIndex,
    setCurrentCarouselIndex,
    handleGoToNext,
    handleGoToPrevious,
  } = useNavigateCarousel();

  const scrollToTopRef = useRef<HTMLDivElement | null>(null);
  const { isSmallScreen } = useDetectScreenSize();

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
        className={`bg-[${bgHex}] flex flex-col md:flex-row w-full h-75% md:h-6/8 py-2 md:px-2 md:py-4 overflow-scroll md:overflow-hidden`}
      >
        {isSmallScreen && (
          <div className="flex justify-between w-full h-8">
            <div className="w-10 h-full">
              <ProjectPageLeftArrow
                selectedIndex={selectedIndex}
                navigateToPreviousProject={navigateToPreviousProject}
              />
            </div>

            <div className="w-10 pb-1.5 h-full">
              <ProjectPageRightArrow
                projectsCount={projectsCount}
                selectedIndex={selectedIndex}
                navigateToNextProject={navigateToNextProject}
              />
            </div>
          </div>
        )}

        {!isSmallScreen && (
          <div className="w-10 h-full md:w-12 cursor-fancy z-10">
            <ProjectPageLeftArrow
              selectedIndex={selectedIndex}
              navigateToPreviousProject={navigateToPreviousProject}
            />
          </div>
        )}

        <div className="w-full h-full flex flex-col md:flex-row">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRightWithDelay}
            className="w-full h-3/5 md:w-3/5 md:h-full overflow-hidden z-20"
          >
            <Carousel
              key={selectedProject.title}
              images={selectedProject.images}
              currentIndex={currentCarouselIndex}
              handleGoToNext={handleGoToNext}
              handleGoToPrevious={handleGoToPrevious}
            />
          </motion.div>

          <div className="w-full h-1/3 md:h-full md:w-2/5">
            <ProjectPageText
              selectedProject={selectedProject}
              selectedIndex={selectedIndex}
              filteredProjects={filteredProjects}
              currentCarouselIndex={currentCarouselIndex}
              imagesCount={imagesCount}
              currentImageText={currentImageText}
            />
          </div>
        </div>

        {!isSmallScreen && (
          <div className="w-12 h-full cursor-fancy z-10">
            <ProjectPageRightArrow
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
