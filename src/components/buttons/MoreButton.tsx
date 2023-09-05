import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "../../types";
import { primaryTransition } from "../../motion";

interface Props {
  project: Project;
}

export const MoreButton = (props: Props) => {
  const { project } = props;

  return (
    <Link to={`/project/${project.title}`} className="flex justify-end">
      <motion.div layout transition={primaryTransition} className="w-16">
        <img className="w-full" src="/starThin.png" />
      </motion.div>
    </Link>
  );
};
