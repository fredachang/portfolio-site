import { AnimatePresence, motion } from "framer-motion";
import { ProjectIndex } from "./ProjectIndex";
import { useState } from "react";
import { ProjectOverview } from "./ProjectOverview";
import { Project } from "../../types";
import { colour } from "../../tailwind-utils";
import { primaryTransition } from "../../motion";

interface Props {
  project: Project;
  isExpanded: boolean;
  handleExpandTile: (projectId: string) => void;
  handleClickCarousel: (
    project: Project,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpandTile, handleClickCarousel } = props;
  const [showIndexImage, setShowIndexImage] = useState(false);

  const handleShowIndexImage = () => {
    setShowIndexImage(true);
  };

  const hideShowIndexImage = () => {
    setShowIndexImage(false);
  };

  const staticStyle = `bg-stone-50 min-w-[80px] md:min-w-[90px] md:w-full h-full border-l border-black`;
  const expandedStyle = `bg-${colour.sitePrimaryColour} w-[800px] h-full z-20 md:z-0 border-l border-black`;

  return (
    <>
      <motion.div
        onClick={() => handleExpandTile(project.id)}
        layout="position"
        transition={primaryTransition}
        className={isExpanded ? expandedStyle : staticStyle}
      >
        <section
          className="flex flex-row justify-between w-full h-full"
          onMouseOver={handleShowIndexImage}
          onMouseLeave={hideShowIndexImage}
          style={
            !isExpanded && showIndexImage
              ? {
                  backgroundImage: `url(${project.indexImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : { backgroundImage: "none", backgroundColor: "#fafaf9" }
          }
        >
          <ProjectIndex isExpanded={isExpanded} project={project} />

          <AnimatePresence>
            {isExpanded && (
              <ProjectOverview
                project={project}
                handleClickCarousel={handleClickCarousel}
              />
            )}
          </AnimatePresence>
        </section>
      </motion.div>
    </>
  );
};
