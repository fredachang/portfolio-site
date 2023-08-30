import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./buttons/MotionHyperLink";
import { VerticalMarquee } from "./other/VerticalMarquee";

export const Footer = () => (
  <>
    <div
      className={`w-screen h-1/6 flex justify-between items-end px-${space.spacingMd} pb-4 border-t border-black z-20`}
    >
      <div className="w-1/3 h-full flex flex-col justify-end pt-6">
        <VerticalMarquee />
      </div>

      <div className="w-1/3 h-full flex justify-center items-end text-xs font-mono text-center">
        Freda is a multidiscplinary designer and developer who thrives in the
        intersection of design and technology. She is looking to create
        impactful digital real estate that pushes the status quo of how we
        experience & interact with the virtual world.
      </div>

      <div className="flex flex-col justify-end items-end w-1/3 h-full pt-6">
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
    </div>
  </>
);
