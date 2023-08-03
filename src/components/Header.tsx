import { AnimatePresence, motion } from "framer-motion";
import { fadeX, staggerParentContainer } from "../motion";
import { Project } from "../types";
import { projectTypes } from "../data";
import { NavButton } from "./NavButton";
import { commonStyles } from "../tailwind-utils";

interface Props {
  handleShowHome: () => void;
  expandFilter: boolean;
  projects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandFilter: () => void;
  removeFilter: boolean;
  projectCount: {
    design: number;
    threeD: number;
    web: number;
  };
}

const filterNavContainer = `flex justify-end w-1/2`;
const categoryButtonContainer = "w-4/5 flex justify-between mr-10";

export const Header = (props: Props) => {
  const {
    handleShowHome,
    expandFilter,
    projects,
    filterProjectsByType,
    handleExpandFilter,
    removeFilter,
    projectCount,
  } = props;

  return (
    <>
      <button className={commonStyles.logo} onClick={handleShowHome}>
        Freda Chang
      </button>

      <div className={filterNavContainer}>
        <AnimatePresence>
          {expandFilter && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerParentContainer}
              className={categoryButtonContainer}
            >
              <NavButton
                buttonText={`Graphic Design (${projectCount.design})`}
                motionVariant={fadeX}
                onClickFunction={() =>
                  filterProjectsByType(projects, projectTypes.GraphicDesign)
                }
              />
              <NavButton
                buttonText={`3D Design (${projectCount.threeD})`}
                motionVariant={fadeX}
                onClickFunction={() =>
                  filterProjectsByType(projects, projectTypes.threeD)
                }
              />
              <NavButton
                buttonText={`Web Development (${projectCount.web})`}
                motionVariant={fadeX}
                onClickFunction={() =>
                  filterProjectsByType(projects, projectTypes.WebDev)
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button className={commonStyles.link} onClick={handleExpandFilter}>
          {removeFilter ? "Show All" : "Filter By"}
        </button>
      </div>
    </>
  );
};
