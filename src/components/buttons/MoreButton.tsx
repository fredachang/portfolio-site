import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "../../types";
import { fadeUp, primaryTransition } from "../../motion";

interface Props {
  project: Project;
}

export const MoreButton = (props: Props) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const { project } = props;

  const handleShowMore = () => {
    setShowMoreText(true);
  };

  const handleHideMore = () => {
    setShowMoreText(false);
  };
  return (
    <Link to={`/project/${project.title}`} className="flex justify-end">
      <motion.div
        layout
        transition={primaryTransition}
        className="w-16"
        onMouseOver={handleShowMore}
        onMouseLeave={handleHideMore}
      >
        <img className="w-full" src="/starThick.png" />
      </motion.div>

      {showMoreText && (
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(5, 0.8)}
          className="font-mono text-xs"
        >
          More
        </motion.p>
      )}
    </Link>
  );
};
