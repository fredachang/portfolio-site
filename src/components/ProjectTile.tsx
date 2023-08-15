import { AnimatePresence, motion } from "framer-motion";
import { fadeRightWithDelay, primaryTransition } from "../motion";
import { Project } from "../types";
import { Carousel } from "./Carousel";
import { commonStyles } from "../tailwind-utils";
import { ProjectIndex } from "./ProjectIndex";
import { Link } from "react-router-dom";
import { useNavigateIndex } from "../hooks/useNavigateIndex";
import { useState } from "react";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";

interface Props {
  project: Project;
  isExpanded: boolean;
  handleExpand: (projectId: string) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpand } = props;
  const [showIndexImage, setShowIndexImage] = useState(false);

  const { currentIndex, handleGoToNext, handleGoToPrevious } =
    useNavigateIndex();
  const { screenWidth } = useDetectScreenWidth();

  const handleShowIndexImage = () => {
    if (screenWidth > 1000) {
      setShowIndexImage(true);
    }
  };

  const hideShowIndexImage = () => {
    if (screenWidth > 1000) {
      setShowIndexImage(false);
    }
  };

  //overall index style
  const sharedStyles = `border-l border-l-2 border-black md-${
    !isExpanded && `w-full`
  } h-full`;
  const staticStyle = `${sharedStyles} min-w-[150px] md:w-full`;
  const expandedStyle = `${sharedStyles} ${commonStyles.sitePrimaryColour} absolute w-full z-20 md:z-0 md:relative md:w-[800px]`;

  return (
    <>
      <motion.div
        onClick={() => handleExpand(project.id)}
        layout="position"
        transition={primaryTransition}
        className={isExpanded ? expandedStyle : staticStyle}
      >
        <section
          className="flex flex-row h-full"
          onMouseOver={handleShowIndexImage}
          onMouseLeave={hideShowIndexImage}
          style={
            !isExpanded && showIndexImage
              ? {
                  backgroundImage: `url(${project.indexImage.imagePath})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : { backgroundImage: "none" }
          }
        >
          <ProjectIndex isExpanded={isExpanded} project={project} />

          <AnimatePresence>
            {isExpanded && (
              <div className="w-full flex flex-col h-86% py-5 px-5 items-start md:flex-row md:h-full">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeRightWithDelay}
                  className="w-full h-2/3 md:w-[700px] md:h-full overflow-hidden"
                >
                  <Carousel
                    images={project.images}
                    currentIndex={currentIndex}
                    handleGoToNext={handleGoToNext}
                    handleGoToPrevious={handleGoToPrevious}
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeRightWithDelay}
                  className="flex w-full h-1/3 md:w-1/3 px-6 flex-col justify-between md:h-full pl-2"
                >
                  <Link to={`/project/${project.title}`}>More</Link>
                  <p className="text-xs">{project.description}</p>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>
      </motion.div>
    </>
  );
};
