import { motion } from "framer-motion";
import { fadeRightWithDelay, scaleUp } from "../motion";
import { Carousel } from "./Carousel";
import { space } from "../tailwind-utils";
import { Project } from "../types";
import { ProjectText } from "./ProjectText";
import { Link, useNavigate } from "react-router-dom";
import { useNavigateCarousel } from "../hooks/useNavigateIndex";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";

interface Props {
  project: Project;
}

export const ProjectOverview = (props: Props) => {
  const { project } = props;

  const { currentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateCarousel();
  const { screenWidth } = useDetectScreenWidth();
  const isMobile = screenWidth < 1000;

  const navigate = useNavigate();

  const handleClickCarousel = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate(`/project/${project.title}`);
  };

  return (
    <div
      className={`w-[300px] md:w-11/12 h-full flex flex-col items-start md:flex-row md:h-full px-${space.spacingMd} md:px-0 py-${space.spacingMd} md:py-${space.spacingLg}`}
    >
      {isMobile && (
        <Link
          to={`/project/${project.title}`}
          className="w-full flex justify-end mb-4"
        >
          <motion.div whileHover={scaleUp} className="w-6">
            <img className="w-full" src="/plus_symbol2.png" />
          </motion.div>
        </Link>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeRightWithDelay}
        className={`w-full md:w-[700px] h-full overflow-hidden cursor-pointer`}
        onClick={handleClickCarousel}
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
