import { links } from "../data";
import { space } from "../tailwind-utils";
import { MotionLink } from "./motionLink";

export const Footer = () => {
  return (
    <>
      <div
        className={`w-screen h-7% mb-${space.spacing3Xl} flex justify-between md:justify-end items-center px-${space.spacingMd} border-t border-t-2 border-black z-20`}
      >
        <MotionLink linkPath={links.email} linkText="EMAIL" />
        <MotionLink linkPath={links.gitHub} linkText="GIBHUB" />
        <MotionLink linkPath={links.instagram} linkText="INSTAGRAM" />
        <MotionLink linkPath={links.linkedIn} linkText="LINKEDIN" />
      </div>
    </>
  );
};
