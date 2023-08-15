import { AnimatePresence, motion } from "framer-motion";
import { fadeRightWithDelay, primaryTransition } from "../motion";
import { Project } from "../types";
import { Carousel } from "./Carousel";
import { commonStyles } from "../tailwind-utils";
import { ProjectIndex } from "./ProjectIndex";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigateIndex } from "../hooks/useNavigateIndex";

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

  const handleShowIndexImage = () => {
    setShowIndexImage(true);
  };

  const hideShowIndexImage = () => {
    setShowIndexImage(false);
  };

  //overall index style
  const sharedStyles = `${
    commonStyles.sitePrimaryColour
  } border-l border-l-2 border-black ${!isExpanded && `w-full`} h-full`;
  const staticStyle = ` ${sharedStyles} w-[150px]`;
  const expandedStyle = `${sharedStyles} w-[800px]`;

  //containers

  const flexBox1 = "flex flex-row h-full";
  const flexBox2 = "flex flex-row py-5 items-start w-full h-full px-5";
  const imageContainer = "w-[700px] h-full overflow-hidden";
  const textContainer = "flex w-1/3 px-6 flex-col justify-between h-full pl-2";

  return (
    <>
      <motion.div
        onClick={() => handleExpand(project.id)}
        layout="position"
        transition={primaryTransition}
        className={isExpanded ? expandedStyle : staticStyle}
      >
        <section
          className={flexBox1}
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
              <div className={flexBox2}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeRightWithDelay}
                  className={imageContainer}
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
                  className={textContainer}
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
