import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { fade } from "../motion";
import { Project } from "../types";
import { ProjectTile } from "./project/ProjectTile";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
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
    showAll,
    onMobile,
    filteredProjects,
    expandedProjectId,
    handleExpandTile,
    handleClickCarousel,
  } = props;

  const { isSmallScreen } = useDetectScreenSize();

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.section
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fade(0.8, 0.5, 0)}
          className={`${isSmallScreen && `relative`} flex h-70% md:h-3/5 ${
            showAll && !onMobile ? `overflow-x-hidden` : `overflow-x-scroll`
          }`}
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
