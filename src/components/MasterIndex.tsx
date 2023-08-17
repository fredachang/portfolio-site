import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { fade } from "../motion";
import { Project } from "../types";
import { ProjectTile } from "./ProjectTile";

interface Props {
  showAll: boolean;
  onMobile: boolean;
  filteredProjects: Project[];
  expandedProjectId: string;
  handleExpandTile: (projectId: string) => void;
}

export const MasterIndex = (props: Props) => {
  const {
    showAll,
    onMobile,
    filteredProjects,
    expandedProjectId,
    handleExpandTile,
  } = props;
  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.section
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fade(0.8, 0.5)}
          className={`flex md:justify-between h-86%  ${
            showAll && !onMobile ? `overflow-x-hidden` : `overflow-x-scroll`
          }`}
        >
          {filteredProjects.map((project) => {
            return (
              <ProjectTile
                key={project.id}
                project={project}
                isExpanded={expandedProjectId === project.id}
                handleExpandTile={handleExpandTile}
              />
            );
          })}
        </motion.section>
      </AnimatePresence>
    </LayoutGroup>
  );
};
