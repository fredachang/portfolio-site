import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "../../types";
import { hoverTransition } from "../../motion";

interface Props {
  project: Project;
}

export const MoreButton = (props: Props) => {
  const { project } = props;

  return (
    <Link to={`/project/${project.title}`} className="flex justify-end">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={hoverTransition}
        className="w-12"
      >
        <img className="w-full" src="/starThin.png" />
      </motion.div>
    </Link>
  );
};
