import { Project } from "../types";
import { Link, useLocation } from "react-router-dom";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { NavMenu } from "./NavMenu";
import Marquee from "react-fast-marquee";
import { ContactMenu } from "./ContactMenu";
import { motion } from "framer-motion";
import { fade, primaryTransition } from "../motion";
import { type } from "../tailwind-utils";

interface Props {
  expandNavFilter: boolean;
  expandContact: boolean;
  expandAll: boolean;
  projects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandNavFilter: () => void;
  handleExpandContact: () => void;
  handleShowHome: () => void;
  handleExpandAll: (filteredProjects: Project[]) => void;
  handleShowAllProjects: () => void;
  filteredProjects: Project[];
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
    expandContact,
    expandNavFilter,
    projects,
    filterProjectsByType,
    handleExpandContact,
    handleExpandNavFilter,
    handleShowAllProjects,
    expandAll,
    handleExpandAll,
    filteredProjects,
    handleShowHome,
    projectCount,
  } = props;

  const { screenWidth } = useDetectScreenWidth();

  const location = useLocation();
  const filePath = location.pathname;
  const isProjectPage = filePath !== "/";

  const filteredProjectType = (filteredProjects: Project[]) => {
    if (filteredProjects.length === projects.length) {
      const returnType = "all projects";
      return returnType;
    }
    return filteredProjects[0].type;
  };

  return (
    <>
      <motion.div
        layout
        transition={primaryTransition}
        className={`bg-stone-50 w-full ${
          isProjectPage ? "h-1/8" : "h-1/5"
        }  border-b z-30 border-black z-10 t-0 flex flex-col`}
      >
        <motion.div
          layout="position"
          transition={primaryTransition}
          className="w-full h-5/6 flex justify-between items-start px-3 pt-3"
        >
          <div className="w-1/3">
            <NavMenu
              expandFilter={expandNavFilter}
              projectCount={projectCount}
              filterProjectsByType={filterProjectsByType}
              projects={projects}
              handleExpandFilter={handleExpandNavFilter}
              filtered={filtered}
              handleExpandAll={handleExpandAll}
            />
          </div>

          <div className="w-1/3 h-full">
            <Link to="/" onClick={handleShowHome}>
              <div className="cursor-fancy font-bold text-2xl text-center">
                {screenWidth > 1000 ? "Freda Chang" : "Freda C."}
              </div>
            </Link>
          </div>

          <div className="w-1/3 h-full">
            <ContactMenu
              expandContact={expandContact}
              handleExpandContact={handleExpandContact}
            />
          </div>
        </motion.div>

        <motion.div
          layout="position"
          transition={primaryTransition}
          className="h-1/6 w-full flex items-center"
        >
          <Marquee speed={15} pauseOnHover>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade(1, 0, 0)}
              className="text-xs font-mono"
            >
              <div
                className={`${type.link} max-w-max text-start md:pl-[120px] md:mb-1`}
              >
                <span className="mr-10">
                  {`Currently viewing ${filteredProjectType(
                    filteredProjects
                  )} `}
                </span>
                {isProjectPage ? (
                  <span
                    className="cursor-fancy"
                    onClick={() => handleShowAllProjects()}
                  >
                    {filtered && "Show All"}
                  </span>
                ) : (
                  <span
                    className="cursor-fancy"
                    onClick={() => handleExpandAll(filteredProjects)}
                  >
                    {expandAll ? "Close All" : "Expand All"}
                  </span>
                )}
              </div>
            </motion.div>
          </Marquee>
        </motion.div>
      </motion.div>
    </>
  );
};
