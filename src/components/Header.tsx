import { AnimatePresence, motion } from "framer-motion";
import { fadeRight, staggerParentContainer } from "../motion";
import { Project } from "../types";
import { projectTypes } from "../data";
import { NavButton } from "./NavButton";
import { commonStyles } from "../tailwind-utils";
import { Link, useLocation } from "react-router-dom";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";

interface Props {
  expandFilter: boolean;
  projects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandFilter: () => void;
  handleShowHome: () => void;
  removeFilter: boolean;
  projectCount: {
    design: number;
    threeD: number;
    web: number;
  };
}

export const Header = (props: Props) => {
  const {
    expandFilter,
    projects,
    filterProjectsByType,
    handleExpandFilter,
    handleShowHome,
    removeFilter,
    projectCount,
  } = props;

  const { screenWidth } = useDetectScreenWidth();

  const location = useLocation();
  const currentPath = location.pathname;

  const mobileFilter = `${commonStyles.sitePrimaryColour} flex flex-col absolute w-full h-full top-0 py-36 border border-black border-2 justify-between right-0`;
  const desktopFilter = `w-2/3 flex justify-between mr-10`;

  return (
    <>
      <div
        className={`w-full h-7% px-${commonStyles.spacingMd} border-b z-30 border-b-2 border-black z-10 t-0 flex justify-between items-center`}
      >
        <Link to="/home" onClick={handleShowHome}>
          <div className={commonStyles.logo}>Freda Chang</div>
        </Link>

        <div className={`flex justify-end w-2/3`}>
          {currentPath === "/" && (
            <div className="flex justify-end w-full">
              <AnimatePresence>
                {expandFilter && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={staggerParentContainer}
                    className={
                      screenWidth > 1000 ? desktopFilter : mobileFilter
                    }
                  >
                    <NavButton
                      buttonText={`Graphic Design (${projectCount.design})`}
                      motionVariant={fadeRight(10, 0.5)}
                      onClickFunction={() =>
                        filterProjectsByType(
                          projects,
                          projectTypes.GraphicDesign
                        )
                      }
                    />
                    <NavButton
                      buttonText={`3D Design (${projectCount.threeD})`}
                      motionVariant={fadeRight(10, 0.5)}
                      onClickFunction={() =>
                        filterProjectsByType(projects, projectTypes.threeD)
                      }
                    />
                    <NavButton
                      buttonText={`Web Development (${projectCount.web})`}
                      motionVariant={fadeRight(10, 0.5)}
                      onClickFunction={() =>
                        filterProjectsByType(projects, projectTypes.WebDev)
                      }
                    />
                    <button onClick={handleExpandFilter}>Close</button>
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
