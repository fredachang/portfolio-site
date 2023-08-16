import { motion } from "framer-motion";
import { moveLeftWhileHover } from "../motion";

interface Props {
  linkPath: string;
  linkText: string;
  linkStyle: string;
}

export const MotionLink = (props: Props) => {
  const { linkPath, linkText, linkStyle } = props;
  return (
    <>
      <motion.a
        href={linkPath}
        whileHover={moveLeftWhileHover}
        target="_blank"
        className={linkStyle}
      >
        {linkText}
      </motion.a>
    </>
  );
};
