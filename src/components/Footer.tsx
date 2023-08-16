import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionLink } from "./motionLink";

export const Footer = () => {
  return (
    <>
      <div
        className={`w-screen h-7% flex justify-between md:justify-end items-center px-${space.spacingMd} border-t border-t-2 border-black z-20`}
      >
        <MotionLink
          linkPath={links.email}
          linkText="EMAIL"
          linkStyle={`${type.link} mr-${space.spacing2Xl}`}
        />
        <MotionLink
          linkPath={links.gitHub}
          linkText="GIBHUB"
          linkStyle={`${type.link} mr-${space.spacing2Xl}`}
        />
        <MotionLink
          linkPath={links.instagram}
          linkText="INSTAGRAM"
          linkStyle={`${type.link} mr-${space.spacing2Xl}`}
        />
        <MotionLink
          linkPath={links.linkedIn}
          linkText="LINKEDIN"
          linkStyle={`${type.link}`}
        />
      </div>
    </>
  );
};
