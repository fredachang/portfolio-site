import { Variants, motion } from "framer-motion";
import { colour, type } from "../tailwind-utils";

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
        className={`${type.link} ${colour.textColorLight}`}
      >
        <p className="hover:underline underline-offset-4 decoration-solid decoration-black transition ease-in duration-300">
          {buttonText}
        </p>
      </motion.button>
    </>
  );
};
