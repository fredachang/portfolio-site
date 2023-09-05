import { motion } from "framer-motion";
import { ProjectText } from "./ProjectText";
import { Project } from "../../types";
import { useNavigateCarousel } from "../../hooks/useNavigateIndex";
import { fadeRightWithDelay } from "../../motion";
import { Carousel } from "../other/Carousel";
import { space } from "../../tailwind-utils";
import { useDetectScreenSize } from "../../hooks/useDetectScreenSize";
import { MoreButton } from "../buttons/MoreButton";

interface Props {
  HighlightHex: string;
  project: Project;
  handleClickCarousel: (
    project: Project,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
}

export const ProjectOverview = (props: Props) => {
  const { project, handleClickCarousel, HighlightHex } = props;

  const { currentCarouselIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateCarousel();
  const { screenWidth } = useDetectScreenSize();
  const isMobile = screenWidth < 1000;

  return (
    <div
      className={`w-full md:w-11/12 h-full flex flex-col items-start md:flex-row md:h-full pr-4 md:px-0 py-${space.spacingMd} md:py-${space.spacingLg}`}
    >
      {isMobile && (
        <div className="w-full mb-1">
          <MoreButton project={project} />{" "}
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeRightWithDelay}
        className={`cursor-fancy w-full md:w-[700px] h-full overflow-hidden cursor-pointer`}
        onClick={(e) => handleClickCarousel(project, e)}
      >
        <Carousel
          images={project.images}
          currentIndex={currentCarouselIndex}
          handleGoToNext={handleGoToNext}
          handleGoToPrevious={handleGoToPrevious}
        />
      </motion.div>

      <ProjectText project={project} HighlightHex={HighlightHex} />
    </div>
  );
};
