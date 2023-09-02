import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { fade } from "../motion";
import { Project } from "../types";
import { ProjectTile } from "./project/ProjectTile";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";
import { useDetectScrollX } from "../hooks/useDetectScrollX";
import { useMapColour } from "../hooks/useMapColour";
import { useEffect } from "react";

interface Props {
  filtered: boolean;
  showAll: boolean;
  onMobile: boolean;
  filteredProjects: Project[];
  expandedProjectId: string[];
  handleExpandTile: (projectId: string) => void;
  handleThemeChangeOnScroll: (
    hexValue: string,
    mappedPercentage: string,
    highlightHexValue: string
  ) => void;
  handleClickCarousel: (
    project: Project,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
}

export const MasterIndex = (props: Props) => {
  const {
    filtered,
    filteredProjects,
    expandedProjectId,
    handleExpandTile,
    handleClickCarousel,
    handleThemeChangeOnScroll,
  } = props;

  const { isSmallScreen } = useDetectScreenSize();
  const { scrollSectionRef, scrollPosition } = useDetectScrollX();
  const { interpolatedBgHex, interpolatedHighlightHex, mappedPercentage } =
    useMapColour(scrollPosition);

  useEffect(() => {
    handleThemeChangeOnScroll(
      interpolatedBgHex,
      interpolatedHighlightHex,
      mappedPercentage
    );
  }, [interpolatedBgHex, mappedPercentage, handleThemeChangeOnScroll]);

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.section
          ref={scrollSectionRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fade(0.8, 0.5, 0)}
          className={`bg-[${interpolatedBgHex}] ${
            isSmallScreen && `relative`
          } ${
            filtered && `justify-between`
          } flex h-65% md:h-3/5 overflow-x-scroll border-b border-black md:border-none`}
        >
          {filteredProjects.map((project) => {
            return (
              <ProjectTile
                interpolatedHex={interpolatedBgHex}
                expandedProjectId={expandedProjectId}
                key={project.id}
                project={project}
                isExpanded={expandedProjectId.includes(project.id)}
                handleExpandTile={handleExpandTile}
                handleClickCarousel={handleClickCarousel}
              />
            );
          })}
        </motion.section>
      </AnimatePresence>
    </LayoutGroup>
  );
};
