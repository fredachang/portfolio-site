import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { fade } from "../motion";
import { Project } from "../types";
import { ProjectTile } from "./project/ProjectTile";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
  filtered: boolean;
  showAll: boolean;
  onMobile: boolean;
  filteredProjects: Project[];
  expandedProjectId: string[];
  handleExpandTile: (projectId: string) => void;
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
  } = props;

  const { isSmallScreen, isPortrait } = useDetectScreenSize();

  const mobileHeight = isPortrait ? "h-70%" : "h-80%";

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.section
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fade(0.8, 0.5, 0)}
          className={`${isSmallScreen && `relative`} ${
            filtered && `justify-between`
          } flex ${mobileHeight} md:h-3/5 overflow-x-scroll border-b border-black md:border-none`}
        >
          {filteredProjects.map((project) => {
            return (
              <ProjectTile
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
