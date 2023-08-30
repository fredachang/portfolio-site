import { Project } from "../types";
import { Link } from "react-router-dom";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { NavMenu } from "./NavMenu";
import Marquee from "react-fast-marquee";
import { ContactMenu } from "./ContactMenu";
import { motion } from "framer-motion";
import { fade } from "../motion";

interface Props {
  expandNavFilter: boolean;
  expandContact: boolean;
  projects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandNavFilter: () => void;
  handleExpandContact: () => void;
  handleShowHome: () => void;
  handleExpandAll: (filteredProjects: Project[]) => void;
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
    handleExpandAll,
    filteredProjects,
    handleShowHome,
    projectCount,
  } = props;

  const { screenWidth } = useDetectScreenWidth();

  return (
    <>
      <div
        className={`w-full h-1/5 border-b z-30 border-black z-10 t-0 flex flex-col`}
      >
        <div className="w-full h-5/6 flex justify-between items-start px-3 pt-3">
          <div className="w-1/3">
            <NavMenu
              expandFilter={expandNavFilter}
              projectCount={projectCount}
              filterProjectsByType={filterProjectsByType}
              projects={projects}
              handleExpandFilter={handleExpandNavFilter}
              filtered={filtered}
              filteredProjects={filteredProjects}
              handleExpandAll={handleExpandAll}
            />
          </div>

          <div className="w-1/3">
            <Link to="/" onClick={handleShowHome}>
              <div className="font-bold text-2xl text-center">
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
        </div>

        <div className="h-1/6 w-full flex items-center">
          {!expandContact && !expandNavFilter && (
            <Marquee speed={30}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fade(1, 0)}
                className="text-xs font-mono"
              >
                Designed and Developed in 2023.
              </motion.div>
            </Marquee>
          )}
        </div>
      </div>
    </>
  );
};
