import { Variants, motion } from "framer-motion";

interface Props {
  linkPath: string;
  linkText: string;
  linkStyle: string;
  motionVariant: Variants;
}

export const ContactHyperLink = (props: Props) => {
  const { linkPath, linkText, linkStyle, motionVariant } = props;
  return (
    <>
      <motion.div className={linkStyle} variants={motionVariant}>
        <a
          href={linkPath}
          target="_blank"
          className="cursor-fancy hover:underline underline-offset-4 decoration-solid decoration-black transition ease-in duration-300"
        >
          {linkText}
        </a>
      </motion.div>
    </>
  );
};
