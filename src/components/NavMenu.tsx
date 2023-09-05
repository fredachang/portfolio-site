import { fadeX, moveLeftWhileHover, staggerParentContainer } from "../motion";
import { type } from "../tailwind-utils";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "../types";
import { projectTypes } from "../data";
import { NavButton } from "./buttons/NavButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
  expandFilter: boolean;
  projects: Project[];
  handleExpandAll: (filteredProjects: Project[]) => void;
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
  } = props;

  const location = useLocation();
  const filePath = location.pathname;
  const isProjectPage = filePath !== "/";

  const { isSmallScreen } = useDetectScreenSize();

  const navigate = useNavigate();

  const handleGoBackToHome = () => {
    navigate("/");
  };

  return (
    <div className={`w-full h-full flex`}>
      <div className="w-full h-full flex flex-col items-start">
        {isProjectPage ? (
          <motion.button
            whileHover={moveLeftWhileHover}
            onClick={handleGoBackToHome}
            className={`${type.smaller}`}
          >
            Back to Index
          </motion.button>
        ) : (
          <motion.button
            whileHover={moveLeftWhileHover}
            className={`${type.smaller} mb-1 cursor-fancy`}
            onClick={handleExpandFilter}
          >
            {filtered ? "Show All" : "Filter By"}
          </motion.button>
        )}

        <AnimatePresence>
          {expandFilter && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerParentContainer}
              className="w-full flex flex-col"
            >
              <NavButton
                buttonText={
                  isSmallScreen
                    ? `Web Dev (${projectCount.web})`
                    : `Web Development (${projectCount.web})`
                }
                buttonStyle={`${type.smaller} text-start pl-[20px] md:pl-[30px] mb-1`}
                motionVariant={fadeX(10, 0.5)}
                onClickFunction={() =>
                  filterProjectsByType(projects, projectTypes.WebDev)
                }
              />
              <NavButton
                buttonText={
                  isSmallScreen
                    ? `Design (${projectCount.design})`
                    : `Graphic Design (${projectCount.design})`
                }
                motionVariant={fadeX(10, 0.5)}
                buttonStyle={`${type.smaller} text-start pl-[40px] md:pl-[60px] mb-1`}
                onClickFunction={() =>
                  filterProjectsByType(projects, projectTypes.GraphicDesign)
                }
              />
              <NavButton
                buttonText={
                  isSmallScreen
                    ? `3D (${projectCount.threeD})`
                    : `3D Design (${projectCount.threeD})`
                }
                buttonStyle={`${type.smaller} text-start pl-[60px] md:pl-[90px] mb-1`}
                motionVariant={fadeX(10, 0.5)}
                onClickFunction={() =>
                  filterProjectsByType(projects, projectTypes.threeD)
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
