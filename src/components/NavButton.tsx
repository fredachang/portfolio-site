import { Variants, motion } from "framer-motion";
import { commonStyles } from "../tailwind-utils";

interface Props {
  buttonText: string;
  onClickFunction: () => void;
  motionVariant: Variants;
}

export const NavButton = (props: Props) => {
  const { buttonText, onClickFunction, motionVariant } = props;
  return (
    <>
      <motion.button
        variants={motionVariant}
        onClick={onClickFunction}
        className={`${commonStyles.link} ${commonStyles.textColorLight}`}
      >
        {buttonText}
      </motion.button>
    </>
  );
};
