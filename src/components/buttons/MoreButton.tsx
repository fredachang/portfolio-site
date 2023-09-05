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
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1.2, 1],
          repeat: 1,
          repeatType: "reverse",
        }}
        className="w-12"
      >
        <motion.div whileHover={{ scale: 1.3 }} transition={hoverTransition}>
          <img className="w-full" src="/starThin.png" />
        </motion.div>
      </motion.div>
    </Link>
  );
};
