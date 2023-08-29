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
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpandTile } = props;
  const [showIndexImage, setShowIndexImage] = useState(false);

  const handleShowIndexImage = () => {
    setShowIndexImage(true);
  };

  const hideShowIndexImage = () => {
    setShowIndexImage(false);
  };

  const staticStyle = `bg-stone-50 min-w-[100px] md:min-w-[130px] md:w-full h-full border-l border-l-2 border-black`;
  const expandedStyle = `bg-${colour.sitePrimaryColour} w-full h-full z-20 md:z-0 border-l border-l-2 border-black`;

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
              : { backgroundImage: "none" }
          }
        >
          <ProjectIndex isExpanded={isExpanded} project={project} />

          <AnimatePresence>
            {isExpanded && <ProjectOverview project={project} />}
          </AnimatePresence>
        </section>
      </motion.div>
    </>
  );
};
