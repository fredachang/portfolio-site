import { motion } from "framer-motion";
import { moveLeftWhileHover } from "../motion";
import { Project } from "../types";
import { Link } from "react-router-dom";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { space, type } from "../tailwind-utils";
import { NavMenu } from "./NavMenu";

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

  return (
    <>
      <div
        className={`bg-yellow-100 w-full h-1/5 px-${space.spacingMd} pt-2 border-b z-30 border-b-2 border-black z-10 t-0 flex justify-between items-start`}
      >
        <div className="w-1/3">
          <NavMenu
            expandFilter={expandFilter}
            projectCount={projectCount}
            filterProjectsByType={filterProjectsByType}
            projects={projects}
            handleExpandFilter={handleExpandFilter}
            filtered={filtered}
          />
        </div>

        <div className="w-1/3">
          <Link to="/home" onClick={handleShowHome}>
            <div className="font-bold text-2xl bg-red-100 text-center">
              {screenWidth > 1000 ? "Freda Chang" : "Freda C."}
            </div>
          </Link>
        </div>

        <div className="w-1/3 bg-red-100">
          <Link className={`bg-red-100 ${type.link}`} to="/about">
            <motion.div whileHover={moveLeftWhileHover}>About</motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};
