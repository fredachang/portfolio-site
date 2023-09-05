import { motion } from "framer-motion";
import { Project } from "../../types";
import { type } from "../../tailwind-utils";
import { primaryTransition } from "../../motion";

interface Props {
  project: Project;
}

export const ProjectIndex = (props: Props) => {
  const { project } = props;

  return (
    <>
      <motion.div
        layout="position"
        transition={primaryTransition}
        className={`flex flex-col justify-between items-center w-20 h-full py-4`}
      >
        <div className="h-3/5 w-full flex justify-center items-start">
          <span className="barText">
            <h1 className={`${type.large}`}>{project.title}</h1>
          </span>
        </div>

        <div className={`w-full flex flex-col justify-between h-1/2 md:h-2/5`}>
          <div className="h-3/4 flex justify-center">
            <div className="barText">
              <h2 className={`${type.smaller}`}>{project.year}</h2>
              <h2 className={`${type.smaller}`}>{project.type}</h2>
            </div>
          </div>

          <div className="h-1/4 flex justify-center items-end">
            <div className="barText">
              <h2 className={type.large}>{project.id}</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
