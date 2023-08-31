import { Variants, motion } from "framer-motion";

interface Props {
  buttonText: string;
  onClickFunction: () => void;
  motionVariant: Variants;
  buttonStyle: string;
}

export const NavButton = (props: Props) => {
  const { buttonText, onClickFunction, motionVariant, buttonStyle } = props;
  return (
    <>
      <motion.button
        variants={motionVariant}
        onClick={onClickFunction}
        className={buttonStyle}
      >
        <p className="cursor-fancy hover:underline underline-offset-4 decoration-solid decoration-black transition ease-in duration-300">
          {buttonText}
        </p>
      </motion.button>
    </>
  );
};
