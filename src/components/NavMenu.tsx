import { useLocation } from "react-router-dom";
import { fadeX, moveLeftWhileHover, staggerParentContainer } from "../motion";
import { colour, type } from "../tailwind-utils";
import { AnimatePresence, motion } from "framer-motion";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { Project } from "../types";
import { projectTypes } from "../data";
import { NavButton } from "./buttons/NavButton";

const mobileFilter = `${colour.sitePrimaryColour} flex flex-col absolute w-full h-full top-0 py-36 justify-between right-0`;
const desktopFilter = `w-full flex flex-col`;

interface Props {
  expandFilter: boolean;
  projects: Project[];
  handleExpandAll: (filteredProjects: Project[]) => void;
  filteredProjects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandFilter: () => void;
  filtered: boolean;
  projectCount: {
    design: number;
    threeD: number;
    web: number;
  };
}

export const NavMenu = (props: Props) => {
  const {
    expandFilter,
    projectCount,
    filterProjectsByType,
    projects,
    handleExpandFilter,
    filtered,
    filteredProjects,
    handleExpandAll,
  } = props;
  const location = useLocation();
  const currentPath = location.pathname;
  const { screenWidth } = useDetectScreenWidth();

  return (
    <div className={`w-full h-full flex`}>
      {currentPath === "/" && (
        <div className="w-full h-full">
          <motion.button
            whileHover={moveLeftWhileHover}
            className={`${type.link} mb-1`}
            onClick={handleExpandFilter}
          >
            {filtered ? "Show All" : "Filter By"}
          </motion.button>

          <AnimatePresence>
            {expandFilter && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={staggerParentContainer}
                className={screenWidth > 1000 ? desktopFilter : mobileFilter}
              >
                <NavButton
                  buttonText={`Graphic Design (${projectCount.design})`}
                  motionVariant={fadeX(10, 0.5)}
                  buttonStyle={`${type.link} text-start md:pl-[50px] md:mb-1`}
                  onClickFunction={() =>
                    filterProjectsByType(projects, projectTypes.GraphicDesign)
                  }
                />
                <NavButton
                  buttonText={`3D Design (${projectCount.threeD})`}
                  buttonStyle={`${type.link} text-start md:pl-[100px] md:mb-1 `}
                  motionVariant={fadeX(10, 0.5)}
                  onClickFunction={() =>
                    filterProjectsByType(projects, projectTypes.threeD)
                  }
                />
                <NavButton
                  buttonText={`Web Development (${projectCount.web})`}
                  buttonStyle={`${type.link} text-start md:pl-[150px] md:mb-1`}
                  motionVariant={fadeX(10, 0.5)}
                  onClickFunction={() =>
                    filterProjectsByType(projects, projectTypes.WebDev)
                  }
                />
                <NavButton
                  buttonText={`Expand All ${filteredProjects[0].type} (${filteredProjects.length})`}
                  buttonStyle={`${type.link} text-start md:pl-[200px] md:mb-1`}
                  motionVariant={fadeX(10, 0.5)}
                  onClickFunction={() => handleExpandAll(filteredProjects)}
                />

                {screenWidth < 1000 && (
                  <button onClick={handleExpandFilter} className={type.link}>
                    <p className="hover:underline underline-offset-4 decoration-solid decoration-black transition ease-in duration-300">
                      Close
                    </p>
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
