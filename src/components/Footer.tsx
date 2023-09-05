import { motion } from "framer-motion";
import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./buttons/MotionHyperLink";
import { primaryTransition } from "../motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useDetectScreenSize } from "../hooks/useDetectScreenSize";
import { TechCycler } from "./other/TechCycler";

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
  const mobileHeight = isProjectPage ? "h-10%" : "h-10%";
  const height = isSmallScreen ? mobileHeight : deskTopHeight;

  const handleGoToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <motion.div
        layout
        transition={primaryTransition}
        className={`${gradientBackground} flex items-end pb-4 fixed bottom-0 w-full ${height} px-${space.spacingMd} border-t border-black z-20`}
      >
        <motion.div
          layout="position"
          transition={primaryTransition}
          className="w-full flex justify-between items-end"
        >
          <div className="w-1/3 h-full">
            <TechCycler />
          </div>

          <div
            className={`${type.smaller} w-1/3 h-full flex justify-center items-start text-center cursor-pointer`}
          >
            <button className={`${type.smaller}`} onClick={handleGoToAbout}>
              About
            </button>
          </div>

          <div className="flex flex-col justify-start items-end w-1/3 md:w-1/3 h-full">
            <MotionHyperlink
              linkPath={links.resumeGeneral}
              linkText="CV"
              linkStyle={`${type.smaller} max-w-max flex items-center cursor-pointer`}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
