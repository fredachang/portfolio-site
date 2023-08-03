import { links } from "../data";
import { MotionLink } from "./motionLink";

export const Footer = () => {
  return (
    <>
      <MotionLink linkPath={links.email} linkText="Email" />
      <MotionLink linkPath={links.gitHub} linkText="GitHub" />
      <MotionLink linkPath={links.instagram} linkText="Instagram" />
      <MotionLink linkPath={links.linkedIn} linkText="LinkedIn" />
    </>
  );
};
