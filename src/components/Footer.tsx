import { motion } from "framer-motion";
import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./buttons/MotionHyperLink";
import { VerticalMarquee } from "./other/VerticalMarquee";
import { primaryTransition } from "../motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";

interface Props {
  bgHex: string;
  mappedPercentage: string;
  HighlightHex: string;
}

export const Footer = (props: Props) => {
  const { bgHex, mappedPercentage, HighlightHex } = props;
  const location = useLocation();
  const filePath = location.pathname;
  const isProjectPage = filePath !== "/";

  const { isSmallScreen } = useDetectScreenSize();
  const navigate = useNavigate();

  const gradientBackground = `bg-gradient-to-t from-[${HighlightHex}] from-0% via-[${HighlightHex}] via-[${mappedPercentage}] to-[${bgHex}] to-75%`;

  const deskTopHeight = isProjectPage ? "h-1/8" : "h-1/5";
  const mobileHeight = isProjectPage ? "h-10%" : "h-15%";
  const height = isSmallScreen ? mobileHeight : deskTopHeight;

  const handleGoToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <motion.div
        layout
        transition={primaryTransition}
        className={`${gradientBackground} fixed bottom-0 w-full ${height} px-${space.spacingMd} border-t border-black pt-4 z-20`}
      >
        <motion.div
          layout="position"
          transition={primaryTransition}
          className="flex justify-between items-start"
        >
          {!isSmallScreen && (
            <div className="w-1/3 h-full">
              <VerticalMarquee />
            </div>
          )}

          {!isSmallScreen && (
            <div className="w-1/3 h-full flex justify-center items-start text-xs font-mono text-center">
              Freda is a multidiscplinary designer and developer who thrives in
              the intersection of design and technology. She is looking to
              create impactful digital real estate that pushes the status quo of
              how we experience & interact with the virtual world.
            </div>
          )}

          {isSmallScreen && (
            <button className={`${type.link}`} onClick={handleGoToAbout}>
              About
            </button>
          )}

          <div className="flex flex-col justify-start items-end w-full md:w-1/3 h-full">
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
      </motion.div>
    </>
  );
};
