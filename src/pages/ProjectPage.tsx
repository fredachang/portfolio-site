import { motion } from "framer-motion";
import { Project } from "../types";
import { fadeRightWithDelay } from "../motion";
import { useNavigate, useParams } from "react-router-dom";
import { useNavigateCarousel } from "../hooks/useNavigateIndex";
import { useRef } from "react";
import { Carousel } from "../components/other/Carousel";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";
import { ProjectPageLeftArrow } from "../components/buttons/ProjectPageLeftArrow";
import { ProjectPageRightArrow } from "../components/buttons/ProjectPageRightArrow";
import { ProjectPageText } from "../components/project/ProjectPageText";

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
        className={`bg-white flex w-full h-full md:h-6/8 py-2 md:px-2 md:py-4 overflow-scroll md:overflow-hidden`}
      >
        <div className="bg-yellow-100 w-10 h-full md:w-12 cursor-fancy">
          <ProjectPageLeftArrow
            selectedIndex={selectedIndex}
            navigateToPreviousProject={navigateToPreviousProject}
          />
        </div>

        <div className="bg-purple-100 w-full flex flex-col md:flex-row overflow-scroll">
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

          <ProjectPageText
            selectedProject={selectedProject}
            selectedIndex={selectedIndex}
            filteredProjects={filteredProjects}
            currentCarouselIndex={currentCarouselIndex}
            imagesCount={imagesCount}
            currentImageText={currentImageText}
          />
        </div>

        <div className="bg-yellow-100 w-12 h-full cursor-fancy">
          <ProjectPageRightArrow
            projectsCount={projectsCount}
            selectedIndex={selectedIndex}
            navigateToNextProject={navigateToNextProject}
          />
        </div>
      </div>
    </>
  );
};
