import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./buttons/MotionHyperLink";
import { VerticalMarquee } from "./other/VerticalMarquee";

export const Footer = () => (
  <>
    <div
      className={`w-screen h-1/6 flex justify-between items-start px-${space.spacingMd} pb-2 border-t border-black z-20`}
    >
      <div className="w-1/3 h-full flex flex-col justify-start pt-6">
        <MotionHyperlink
          linkPath={links.resumeDev}
          linkText="CV - Developer"
          linkStyle={`${type.link} flex max-w-max items-center mb-0.5`}
        />
        <MotionHyperlink
          linkPath={links.resumeGeneral}
          linkText="CV - General"
          linkStyle={`${type.link} max-w-max flex items-center`}
        />
      </div>
      <div className="w-1/3 h-full flex justify-center items-start pt-6">
        <VerticalMarquee />
      </div>

      <div className="flex flex-col justify-start items-end w-1/3 h-full pt-6">
        <MotionHyperlink
          linkPath={links.email}
          linkText="EMAIL"
          linkStyle={`${type.link}`}
        />
        <MotionHyperlink
          linkPath={links.gitHub}
          linkText="GIBHUB"
          linkStyle={`${type.link}`}
        />
        <MotionHyperlink
          linkPath={links.instagram}
          linkText="INSTAGRAM"
          linkStyle={`${type.link}`}
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
