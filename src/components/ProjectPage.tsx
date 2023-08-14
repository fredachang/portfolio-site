import { motion } from "framer-motion";
import { Project } from "../types";
import { fadeUp, fadeXYWithDelay } from "../motion";
import { Carousel } from "./Carousel";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  projects: Project[];
}

const imageContainer = "w-2/3 h-full overflow-hidden";
const textContainer = "flex flex-col justify-between px-4 w-1/3";

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { projects } = props;

  const navigate = useNavigate();

  const selectedProject = projects.find((project) => project.title === title);

  if (!selectedProject) {
    return <div>Project not found.</div>;
  }

  const selectedIndex = projects.findIndex(
    (project) => project.title === title
  );

  const previousIndex = selectedIndex - 1;
  const nextIndex = selectedIndex + 1;

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
        variants={fadeUp}
      >
        <div
          className="flex justify-center w-full cursor-pointer"
          onClick={navigateToPreviousProject}
        >
          <p className="-rotate-90 text-3xl">&rsaquo;</p>
        </div>

        <div className="flex h-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeXYWithDelay}
            className={imageContainer}
          >
            <Carousel images={selectedProject.images} />
          </motion.div>

          <div className={textContainer}>
            <div>
              <div className="flex justify-between mb-6">
                <p>{selectedProject.id}</p>
                <p>{selectedProject.year}</p>
                <p>{selectedProject.type}</p>
              </div>
              <p className="text-5xl">{selectedProject.title}</p>
            </div>

            <p>{selectedProject.description}</p>
          </div>
        </div>

        <div
          className="flex justify-center w-full cursor-pointer"
          onClick={navigateToNextProject}
        >
          <p className="rotate-90 text-3xl">&rsaquo;</p>
        </div>
      </motion.div>
    </>
  );
};
