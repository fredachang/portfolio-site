import { motion } from "framer-motion";
import { moveLeftWhileHover } from "../../motion";

interface Props {
  linkPath: string;
  linkText: string;
  linkStyle: string;
}

export const MotionHyperlink = (props: Props) => {
  const { linkPath, linkText, linkStyle } = props;
  return (
    <>
      <motion.div className="max-w-max" whileHover={moveLeftWhileHover}>
        <a href={linkPath} target="_blank" className={linkStyle}>
          {linkText}
        </a>
      </motion.div>
    </>
  );
};
