import Marquee from "react-fast-marquee";
import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./MotionHyperLink";

export const Footer = () => (
  <>
    <div
      className={`w-screen h-7% flex justify-between items-center px-${space.spacingMd} border-t border-t-2 border-black z-20`}
    >
      <div className="w-1/5">
        <Marquee speed={30}>
          <div className="font-mono text-sm">Designed and Developed 2023.</div>
        </Marquee>
      </div>

      <div>
        <MotionHyperlink
          linkPath={links.email}
          linkText="EMAIL"
          linkStyle={`${type.link} mr-${space.spacing2Xl}`}
        />
        <MotionHyperlink
          linkPath={links.gitHub}
          linkText="GIBHUB"
          linkStyle={`${type.link} mr-${space.spacing2Xl}`}
        />
        <MotionHyperlink
          linkPath={links.instagram}
          linkText="INSTAGRAM"
          linkStyle={`${type.link} mr-${space.spacing2Xl}`}
        />
        <MotionHyperlink
          linkPath={links.linkedIn}
          linkText="LINKEDIN"
          linkStyle={`${type.link}`}
        />
      </div>
    </div>
  </>
);
