import { Link } from "react-router-dom";
import { space } from "../tailwind-utils";
import { motion } from "framer-motion";
import { fade } from "../motion";

interface Props {
  bgHex: string;
}

export const About = (props: Props) => {
  const { bgHex } = props;
  return (
    <>
      <motion.div
        className={`bg-[${bgHex}] flex flex-col justify-between w-full h-75%`}
      >
        <Link to="/home">
          <div
            className={`p-${space.spacingMd} w-screen cursor-default h-full flex flex-col`}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade(1, 0.5, 0)}
              className={`font-light text-sm leading-6 w-full`}
            >
              Freda is a multidiscplinary designer and developer who thrives in
              the intersection of design and technology. Bringing analytical
              thinking capabilities from a previous career in consulting, she is
              looking to create impactful digital real estate that pushes the
              status quo of how we experience & interact with the virtual world.{" "}
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};
