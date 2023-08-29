import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./buttons/MotionHyperLink";
import { MarqueeComponent } from "./other/Marquee";

export const Footer = () => (
  <>
    <div
      className={`w-screen h-1/5 flex justify-between items-center px-${space.spacingMd} border-t border-t-2 border-black z-20`}
    >
      <div className="w-1/4">
        <a href="https://github.com/fredachang/portfolio-site" target="_blank">
          <MarqueeComponent description="Designed and developed 2023. Click to see open-source code on Github" />
        </a>
      </div>

      <div className="flex justify-end w-1/3">
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
