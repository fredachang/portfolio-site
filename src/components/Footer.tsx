import { links } from "../data";
import { commonStyles } from "../tailwind-utils";
import { MotionLink } from "./motionLink";

export const Footer = () => {
  return (
    <>
      <div
        className={`w-screen h-7% flex justify-between items-center px-${commonStyles.spacingMd} border-t border-t-2 border-black z-20`}
      >
        <MotionLink linkPath={links.email} linkText="Email" />
        <MotionLink linkPath={links.gitHub} linkText="GitHub" />
        <MotionLink linkPath={links.instagram} linkText="Instagram" />
        <MotionLink linkPath={links.linkedIn} linkText="LinkedIn" />
      </div>
    </>
  );
};
