import { Link } from "react-router-dom";
import { space, type } from "../tailwind-utils";
import { links } from "../data";
import { useDetectScreenWidth } from "../hooks/useDetectScreenWidth";
import { motion } from "framer-motion";
import { fade, fadeUp } from "../motion";
import { MotionHyperlink } from "../components/buttons/MotionHyperLink";

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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fade(1, 0.5)}
              className={`font-light text-base leading-6 w-full md:text-xl md:w-1/2 leading-8`}
            >
              Freda is a multidiscplinary designer and developer who thrives in
              the intersection of design and technology. Bringing analytical
              thinking capabilities from a previous career in consulting, she is
              looking to create impactful digital real estate that pushes the
              status quo of how we experience & interact with the virtual world.{" "}
            </motion.div>

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
          linkPath={links.resumeDev}
          linkText="CV - Developer"
          linkStyle={`${type.link} bg-red-100 flex max-w-max items-center mb-2`}
        />
        <MotionHyperlink
          linkPath={links.resumeGeneral}
          linkText="CV - General"
          linkStyle={`${type.link} bg-red-100 max-w-max flex items-center`}
        />
      </motion.div>
    </>
  );
};
