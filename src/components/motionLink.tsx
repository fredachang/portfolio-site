import { motion } from "framer-motion";
import { moveLeftWhileHover } from "../motion";
import { commonStyles } from "../tailwind-utils";

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
        className={commonStyles.link}
      >
        {linkText}
      </motion.a>
    </>
  );
};
