import { motion } from "framer-motion";
import { Image } from "../types";
import { fadeXY } from "../motion";

interface Props {
  images: Image[];
}

export const Content = (props: Props) => {
  const { images } = props;
  return (
    <>
      <motion.div className="h-full" initial="hidden" animate="visible">
        <img className="w-100 h-100" src={images[0].imagePath} />
      </motion.div>
    </>
  );
};
