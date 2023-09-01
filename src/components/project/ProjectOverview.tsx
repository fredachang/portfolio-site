import { motion } from "framer-motion";
import { ProjectText } from "./ProjectText";
import { Link, useNavigate } from "react-router-dom";
import { Project } from "../../types";
import { useNavigateCarousel } from "../../hooks/useNavigateIndex";
import { fadeRightWithDelay, scaleUp } from "../../motion";
import { Carousel } from "../other/Carousel";
import { space } from "../../tailwind-utils";
import { useDetectScreenSize } from "../../hooks/useDetectScreenSize";

interface Props {
  project: Project;
}

export const ProjectOverview = (props: Props) => {
  const { project } = props;

  const { currentCarouselIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateCarousel();
  const { screenWidth } = useDetectScreenSize();
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
          <motion.div whileHover={scaleUp} className="w-12">
            <img className="w-full" src="/starThick.png" />
          </motion.div>
        </Link>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeRightWithDelay}
        className={`cursor-fancy w-full md:w-[700px] h-full overflow-hidden cursor-pointer`}
        onClick={handleClickCarousel}
      >
        <Carousel
          images={project.images}
          currentIndex={currentCarouselIndex}
          handleGoToNext={handleGoToNext}
          handleGoToPrevious={handleGoToPrevious}
        />
      </motion.div>

      <ProjectText project={project} />
    </div>
  );
};
