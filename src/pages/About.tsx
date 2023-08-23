import { Link } from "react-router-dom";
import { space, type } from "../tailwind-utils";
import { links } from "../data";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { motion } from "framer-motion";
import { fadeUp } from "../motion";
import { MotionHyperlink } from "../components/MotionHyperLink";

export const About = () => {
  const { screenWidth } = useDetectScreenWidth();
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(100, 0.8)}
        className="flex flex-col justify-between w-full h-86%"
      >
        <Link to="/home">
          <div
            className={`p-${space.spacingMd} w-screen cursor-default h-full flex flex-col`}
          >
            <div
              className={`font-light text-base leading-6 w-full md:text-xl md:w-1/2 leading-8`}
            >
              Freda is a multidiscplinary designer and developer who thrives in
              the intersection of design and technology. Bringing analytical
              thinking capabilities from a previous career in consulting, she is
              looking to create impactful digital real estate that pushes the
              status quo of how we experience & interact with the virtual world.{" "}
            </div>

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
        <MotionHyperlink
          linkPath={links.resume}
          linkText="View CV"
          linkStyle={`${type.link} flex items-center w-20 h-10 mb-20 ml-4`}
        />
      </motion.div>
    </>
  );
};
