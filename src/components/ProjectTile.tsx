import { AnimatePresence, motion } from "framer-motion";
import { primaryTransition } from "../motion";
import { Project } from "../types";
import { ProjectIndex } from "./ProjectIndex";
import { useState } from "react";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { colour } from "../tailwind-utils";
import { ProjectOverview } from "./ProjectOverview";

interface Props {
  project: Project;
  isExpanded: boolean;
  handleExpandTile: (projectId: string) => void;
}

export const ProjectTile = (props: Props) => {
  const { project, isExpanded, handleExpandTile } = props;
  const [showIndexImage, setShowIndexImage] = useState(false);

  const { screenWidth } = useDetectScreenWidth();

  const handleShowIndexImage = () => {
    setShowIndexImage(true);
  };

  const hideShowIndexImage = () => {
    setShowIndexImage(false);
  };

  const staticStyle = `min-w-[130px] md:w-full h-full border-l border-l-2 border-black`;
  const expandedStyle = `${colour.sitePrimaryColour} ${
    screenWidth < 1000 && `absolute`
  } w-full h-80% md:h-full z-20 md:z-0 border-l border-l-2 border-black`;

  return (
    <>
      <motion.div
        onClick={() => handleExpandTile(project.id)}
        layout="position"
        transition={primaryTransition}
        className={isExpanded ? expandedStyle : staticStyle}
      >
        <section
          className="bg-green-100 flex flex-row w-full h-full"
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
