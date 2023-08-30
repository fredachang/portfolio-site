import { Project } from "../types";
import { Link } from "react-router-dom";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { NavMenu } from "./NavMenu";
import Marquee from "react-fast-marquee";
import { ContactMenu } from "./ContactMenu";

interface Props {
  expandNavFilter: boolean;
  expandContact: boolean;
  projects: Project[];
  filterProjectsByType: (projects: Project[], projectType: string) => void;
  handleExpandNavFilter: () => void;
  handleExpandContact: () => void;
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
    expandContact,
    expandNavFilter,
    projects,
    filterProjectsByType,
    handleExpandContact,
    handleExpandNavFilter,
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
            {/* <div className="w-2/3 text-xxs font-mono text-right leading-4">
              Freda is a multidiscplinary designer and developer who thrives in
              the intersection of design and technology. She is looking to
              create impactful digital real estate that pushes the status quo of
              how we experience & interact with the virtual world.
            </div>

            {isMobile && (
              <Link className={`bg-red-100 ${type.link}`} to="/about">
                <motion.div whileHover={moveLeftWhileHover}>About</motion.div>
              </Link>
            )} */}
          </div>
        </div>

        <div className="h-1/6 w-full flex items-center">
          <Marquee speed={30}>
            <div className="text-xs font-mono">
              Designed and Developed in 2023.
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};
