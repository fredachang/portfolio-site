import { AnimatePresence, motion } from "framer-motion";
import { fadeX, moveLeftWhileHover, staggerParentContainer } from "../motion";
import { Project } from "../types";
import { projectTypes } from "../data";
import { NavButton } from "./NavButton";
import { Link, useLocation } from "react-router-dom";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { colour, space, type } from "../tailwind-utils";

interface Props {
  expandFilter: boolean;
  projects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandFilter: () => void;
  handleShowHome: () => void;
  filtered: boolean;
  projectCount: {
    design: number;
    threeD: number;
    web: number;
  };
}

export const Header = (props: Props) => {
  const {
    filtered,
    expandFilter,
    projects,
    filterProjectsByType,
    handleExpandFilter,
    handleShowHome,
    projectCount,
  } = props;

  const { screenWidth } = useDetectScreenWidth();

  const location = useLocation();
  const currentPath = location.pathname;

  const mobileFilter = `${colour.sitePrimaryColour} flex flex-col absolute w-full h-full top-0 py-36 justify-between right-0`;
  const desktopFilter = `w-3/4 flex justify-end mr-10`;

  return (
    <>
      <div
        className={`w-full h-7% px-${space.spacingMd} border-b z-30 border-b-2 border-black z-10 t-0 flex justify-between items-center`}
      >
        <Link to="/home" onClick={handleShowHome}>
          <div className={type.logo}>
            {screenWidth > 1000 ? "Freda Chang" : "Freda C."}
          </div>
        </Link>

        <div className={`flex justify-end w-2/3`}>
          {currentPath === "/home" && (
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
                      motionVariant={fadeX(10, 0.5)}
                      buttonStyle={`${type.link} md:mr-${space.spacing4Xl}`}
                      onClickFunction={() =>
                        filterProjectsByType(
                          projects,
                          projectTypes.GraphicDesign
                        )
                      }
                    />
                    <NavButton
                      buttonText={`3D Design (${projectCount.threeD})`}
                      buttonStyle={`${type.link} md:mr-${space.spacing4Xl}`}
                      motionVariant={fadeX(10, 0.5)}
                      onClickFunction={() =>
                        filterProjectsByType(projects, projectTypes.threeD)
                      }
                    />
                    <NavButton
                      buttonText={`Web Development (${projectCount.web})`}
                      buttonStyle={`${type.link}`}
                      motionVariant={fadeX(10, 0.5)}
                      onClickFunction={() =>
                        filterProjectsByType(projects, projectTypes.WebDev)
                      }
                    />
                    {screenWidth < 1000 && (
                      <button
                        onClick={handleExpandFilter}
                        className={type.link}
                      >
                        <p className="hover:underline underline-offset-4 decoration-solid decoration-black transition ease-in duration-300">
                          Close
                        </p>
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                whileHover={moveLeftWhileHover}
                className={`${type.link} mr-10`}
                onClick={handleExpandFilter}
              >
                {filtered ? "Show All" : "Filter By"}
              </motion.button>
            </div>
          )}

          <Link className={type.link} to="/about">
            <motion.div whileHover={moveLeftWhileHover}>About</motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};
