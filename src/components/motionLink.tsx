import { motion } from "framer-motion";
import { moveLeftWhileHover } from "../motion";
import { space, type } from "../tailwind-utils";

interface Props {
  linkPath: string;
  linkText: string;
}

export const MotionLink = (props: Props) => {
  const { linkPath, linkText } = props;
  return (
    <>
      <motion.a
        href={linkPath}
        whileHover={moveLeftWhileHover}
        target="_blank"
        className={`${type.link} mr-${space.spacing2Xl}`}
      >
        {linkText}
      </motion.a>
    </>
  );
};
