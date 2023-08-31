import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { fade } from "../../motion";
import { Project } from "../../types";
import { type } from "../../tailwind-utils";

interface Props {
  filteredProjects: Project[];
  filteredProjectType: (filteredProjects: Project[]) => void;
  isProjectPage: boolean;
  handleShowAllProjects: () => void;
  filtered: boolean;
  expandAll: boolean;
  handleExpandAll: (filteredProjects: Project[]) => void;
}

export const NavMarquee = (props: Props) => {
  const {
    filteredProjects,
    filteredProjectType,
    isProjectPage,
    handleShowAllProjects,
    handleExpandAll,
    expandAll,
    filtered,
  } = props;
  return (
    <Marquee speed={15} pauseOnHover>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade(1, 0, 0)}
        className="text-xs font-mono"
      >
        <div
          className={`${type.link} max-w-max flex text-start md:pl-[120px] md:mb-1`}
        >
          <div className="mr-36">
            <span className="mr-10">
              {`Currently viewing ${filteredProjectType(filteredProjects)} `}
            </span>
            {isProjectPage ? (
              <span
                className="cursor-fancy mr-10"
                onClick={() => handleShowAllProjects()}
              >
                {filtered && "Show All"}
              </span>
            ) : (
              <span
                className="cursor-fancy mr-10"
                onClick={() => handleExpandAll(filteredProjects)}
              >
                {expandAll ? "Close All" : "Expand All"}
              </span>
            )}
          </div>

          <div>
            <span className="mr-10">
              {`Currently viewing ${filteredProjectType(filteredProjects)} `}
            </span>
            {isProjectPage ? (
              <span
                className="cursor-fancy mr-10"
                onClick={() => handleShowAllProjects()}
              >
                {filtered && "Show All"}
              </span>
            ) : (
              <span
                className="cursor-fancy mr-10"
                onClick={() => handleExpandAll(filteredProjects)}
              >
                {expandAll ? "Close All" : "Expand All"}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Marquee>
  );
};
