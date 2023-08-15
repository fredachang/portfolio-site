import { motion } from "framer-motion";
import { Project } from "../types";
import {
  fade,
  fadeDown,
  fadeRight,
  fadeRightWithDelay,
  fadeUp,
} from "../motion";
import { Carousel } from "./Carousel";
import { useNavigate, useParams } from "react-router-dom";
import { useNavigateIndex } from "../hooks/useNavigateIndex";

interface Props {
  projects: Project[];
}

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { projects } = props;

  const navigate = useNavigate();
  const { currentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateIndex();

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

  console.log(currentImageText);

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
        className="flex flex-col w-full h-full px-5"
        initial="hidden"
        animate="visible"
        variants={fadeUp(100, 0.8)}
      >
        <div
          className="flex justify-center items-center w-full h-6 cursor-pointer"
          onClick={navigateToPreviousProject}
        >
          {selectedIndex > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(20, 1)}
            >
              <p className="-rotate-90 text-3xl">&rsaquo;</p>
            </motion.div>
          )}
        </div>

        <div className="flex h-full flex-col md:flex-row relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRightWithDelay}
            className="w-full md:w-2/3 h-full overflow-hidden"
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
            className="flex flex-col justify-between px-4 w-1/3"
          >
            <div>
              <div className="flex justify-between mb-6">
                <p>{selectedProject.id}</p>
                <p>{selectedProject.year}</p>
                <p>{selectedProject.type}</p>
              </div>
              <p className="text-5xl">{selectedProject.title}</p>
            </div>

            <div>
              <p className="mb-4">{selectedProject.description}</p>
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                variants={fadeRight(-10, 1.5)}
              >
                <p className="font-bold text-xs">{`[${currentImageText}]`}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div
          className="flex justify-center items-center w-full h-6 cursor-pointer"
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
