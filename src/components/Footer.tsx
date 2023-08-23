import Marquee from "react-fast-marquee";
import { links } from "../data";
import { space, type } from "../tailwind-utils";
import { MotionHyperlink } from "./MotionHyperLink";

export const Footer = () => (
  <>
    <div
      className={`w-screen h-7% flex justify-between items-center px-${space.spacingMd} border-t border-t-2 border-black z-20`}
    >
      <div className="w-1/4">
        <Marquee pauseOnHover speed={30}>
          <div className="font-mono text-sm cursor-pointer">
            Designed and developed 2023. Click to see open-source code on
            <a
              href="https://github.com/fredachang/portfolio-site"
              className="mr-2"
              target="_blank"
            >
              {" "}
              Github.
            </a>
          </div>
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
