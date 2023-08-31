import { motion } from "framer-motion";
import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./buttons/MotionHyperLink";
import { VerticalMarquee } from "./other/VerticalMarquee";
import { primaryTransition } from "../motion";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const filePath = location.pathname;
  const reducedHeight = filePath !== "/";

  return (
    <>
      <motion.div
        layout="position"
        transition={primaryTransition}
        className={`w-full  ${
          reducedHeight ? "h-1/6" : "h-1/5"
        } flex justify-between items-start px-${
          space.spacingMd
        } border-t border-black pt-4 z-20`}
      >
        <div className="w-1/3 h-full">
          <VerticalMarquee />
        </div>

        <div className="w-1/3 h-full flex justify-center items-start text-xs font-mono text-center">
          Freda is a multidiscplinary designer and developer who thrives in the
          intersection of design and technology. She is looking to create
          impactful digital real estate that pushes the status quo of how we
          experience & interact with the virtual world.
        </div>

        <div className="flex flex-col justify-start items-end w-1/3 h-full">
          <MotionHyperlink
            linkPath={links.resumeDev}
            linkText="CV - Developer"
            linkStyle={`${type.link} flex max-w-max items-center mb-0.5 cursor-fancy`}
          />
          <MotionHyperlink
            linkPath={links.resumeGeneral}
            linkText="CV - General"
            linkStyle={`${type.link} max-w-max flex items-center cursor-fancy`}
          />
        </div>
      </motion.div>
    </>
  );
};
