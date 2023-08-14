import { motion } from "framer-motion";
import { Project } from "../types";
import { fadeXYWithDelay } from "../motion";
import { Carousel } from "./Carousel";
import { useParams } from "react-router-dom";

interface Props {
  projects: Project[];
}

const imageContainer = "w-2/3 py-5 h-full overflow-hidden";
const textContainer = "flex flex-col justify-between py-5 px-4 w-1/3";

export const ProjectPage = (props: Props) => {
  const { title } = useParams();
  const { projects } = props;

  const selectedProject = projects.find((project) => project.title === title);

  if (!selectedProject) {
    return <div>Project not found.</div>;
  }
  return (
    <>
      <div className="flex px-5">
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
      </div>
    </>
  );
};
