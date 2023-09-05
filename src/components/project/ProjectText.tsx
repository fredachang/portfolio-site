import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Project } from "../../types";
import { fadeRightWithDelay, moveRightWhileHover } from "../../motion";
import { MoreButton } from "../buttons/MoreButton";
import { space, type } from "../../tailwind-utils";
import { TechStack } from "../TechStack";
import { useDetectScreenSize } from "../../hooks/useDetectScreenSize";

interface Props {
  HighlightHex: string;
  project: Project;
}

export const ProjectText = (props: Props) => {
  const { project, HighlightHex } = props;
  const { screenWidth } = useDetectScreenSize();
  const isMobile = screenWidth < 1000;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeRightWithDelay}
      className={`flex flex-col justify-between w-full md:w-1/3 h-1/3 md:h-full md:mx-${space.spacingMd}`}
    >
      {!isMobile && <MoreButton project={project} />}

      <div>
        <p className={`${type.paragraph} mt-4 md:mt-0 mb-${space.spacingMd}`}>
          {isMobile ? project.shortDescription : project.description}
        </p>

        {!isMobile && (
          <div className="flex">
            {project.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.path}
                whileHover={moveRightWhileHover}
                target="_blank"
                className={`${type.smaller} cursor-fancy flex items-center h-5 mr-4`}
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        )}

        <div className="w-60 mb-2">
          <Marquee speed={8}>
            {project.techStack.map((techStack, i) => (
              <div key={i} className="mr-1">
                <TechStack
                  description={techStack}
                  HighlightHex={HighlightHex}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};
