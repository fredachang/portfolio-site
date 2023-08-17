import { motion } from "framer-motion";
import { fadeRightWithDelay } from "../motion";
import { Carousel } from "./Carousel";
import { space } from "../tailwind-utils";
import { Project } from "../types";
import { useNavigateIndex } from "../hooks/useNavigateIndex";
import { ProjectText } from "./ProjectText";

interface Props {
  project: Project;
}

export const ProjectOverview = (props: Props) => {
  const { project } = props;

  const { currentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateIndex();

  return (
    <div
      className={`bg-purple-100 w-11/12 h-full flex flex-col items-start md:flex-row md:h-full px-${space.spacingMd} md:px-0 py-${space.spacingMd} md:py-${space.spacingLg}`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeRightWithDelay}
        className={`w-full md:w-[700px] h-2/3 md:h-full overflow-hidden`}
      >
        <Carousel
          images={project.images}
          currentIndex={currentIndex}
          handleGoToNext={handleGoToNext}
          handleGoToPrevious={handleGoToPrevious}
        />
      </motion.div>

      <ProjectText project={project} />
    </div>
  );
};
