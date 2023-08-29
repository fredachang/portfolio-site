import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Project } from "../../types";
import { useDetectScreenWidth } from "../../hooks/useDetectScreenWidth";
import { fadeRightWithDelay, moveRightWhileHover } from "../../motion";
import { MoreButton } from "../buttons/MoreButton";
import { space } from "../../tailwind-utils";
import { TechStack } from "../TechStack";

interface Props {
  project: Project;
}

export const ProjectText = (props: Props) => {
  const { project } = props;
  const { screenWidth } = useDetectScreenWidth();
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
        <p
          className={`font-light text-sm md:text-xs md:leading-5 mt-4 md:mt-0 mb-${space.spacingMd}`}
        >
          {isMobile ? project.shortDescription : project.description}
        </p>

        <div className="w-60 mb-2">
          <Marquee speed={8}>
            {project.techStack.map((techStack, i) => (
              <div key={i} className="mr-1">
                <TechStack description={techStack} />
              </div>
            ))}
          </Marquee>
        </div>

        {!isMobile && (
          <div>
            {project.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.path}
                whileHover={moveRightWhileHover}
                target="_blank"
                className={`flex items-center text-xs font-mono uppercase h-6 mr-4`}
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
