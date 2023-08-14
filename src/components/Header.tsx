import { AnimatePresence, motion } from "framer-motion";
import { fadeX, staggerParentContainer } from "../motion";
import { Project } from "../types";
import { projectTypes } from "../data";
import { NavButton } from "./NavButton";
import { commonStyles } from "../tailwind-utils";
import { Link, useLocation } from "react-router-dom";

interface Props {
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

const utilsContainer = `flex justify-end w-1/2`;
const filterByContainer = "flex justify-end w-full";
const categoryButtonContainer = "w-2/3 flex justify-between mr-10";

export const Header = (props: Props) => {
  const {
    expandFilter,
    projects,
    filterProjectsByType,
    handleExpandFilter,
    removeFilter,
    projectCount,
  } = props;

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div
        className={`w-full h-7% px-${commonStyles.spacingMd} border-b border-b-2 border-black z-10 t-0 flex justify-between items-center`}
      >
        <Link to="/">
          <div className={commonStyles.logo}>Freda Chang</div>
        </Link>

        <div className={utilsContainer}>
          {currentPath === "/" && (
            <div className={filterByContainer}>
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
                        filterProjectsByType(
                          projects,
                          projectTypes.GraphicDesign
                        )
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
              <button
                className={`${commonStyles.link} mr-10`}
                onClick={handleExpandFilter}
              >
                {removeFilter ? "Show All" : "Filter By"}
              </button>
            </div>
          )}

          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
      </div>
    </>
  );
};
