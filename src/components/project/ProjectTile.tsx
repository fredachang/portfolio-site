import { AnimatePresence, motion } from "framer-motion";
import { ProjectIndex } from "./ProjectIndex";
import { ProjectOverview } from "./ProjectOverview";
import { Project } from "../../types";
import { primaryTransition } from "../../motion";

interface Props {
  interpolatedHex: string;
  expandedProjectId: string[];
  project: Project;
  isExpanded: boolean;
  handleExpandTile: (projectId: string) => void;
  handleClickCarousel: (
    project: Project,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
}

export const ProjectTile = (props: Props) => {
  const {
    expandedProjectId,
    interpolatedHex,
    project,
    isExpanded,
    handleExpandTile,
    handleClickCarousel,
  } = props;

  const allCollapsed = expandedProjectId.length === 0;

  const widthWhenOneOrMoreExpanded = isExpanded
    ? "md:w-7/12"
    : "min-w-[70px] md:min-w-[90px]";
  const width = allCollapsed ? "w-full" : widthWhenOneOrMoreExpanded;

  return (
    <>
      <motion.div
        onClick={() => handleExpandTile(project.id)}
        layout="position"
        transition={primaryTransition}
        className={`bg-[${interpolatedHex}] ${width} flex flex-row justify-center h-full border-l border-black`}
      >
        <ProjectIndex project={project} />

        <AnimatePresence>
          {isExpanded && (
            <ProjectOverview
              project={project}
              handleClickCarousel={handleClickCarousel}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
