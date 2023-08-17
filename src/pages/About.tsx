import { Link } from "react-router-dom";
import { space, type } from "../tailwind-utils";
import { links } from "../data";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { motion } from "framer-motion";
import { fadeUp } from "../motion";

export const About = () => {
  const { screenWidth } = useDetectScreenWidth();
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(100, 0.8)}
        className="flex justify-between w-full h-86%"
      >
        <Link to="/home">
          <div
            className={`p-${space.spacingMd} w-screen cursor-default h-full flex flex-col`}
          >
            <div className={type.md}>Freda is a designer based in Sydney</div>

            {screenWidth < 1000 && (
              <div
                className={`flex flex-col h-1/4 justify-between mt-${space.spacing2Xl}`}
              >
                <a href={links.email} className={type.link}>
                  EMAIL
                </a>
                <a href={links.gitHub} className={type.link}>
                  GITHUB
                </a>
                <a href={links.instagram} className={type.link}>
                  INSTAGRAM
                </a>
                <a href={links.linkedIn} className={type.link}>
                  LINKEDIN
                </a>
              </div>
            )}
          </div>
        </Link>
      </motion.div>
    </>
  );
};
