import { AnimatePresence, motion } from "framer-motion";
import { fadeX, moveLeftWhileHover, staggerParentContainer } from "../motion";
import { type } from "../tailwind-utils";
import { links } from "../data";
import { ContactHyperLink } from "./buttons/ContactHyperLink";

interface Props {
  expandContact: boolean;
  handleExpandContact: () => void;
}

export const ContactMenu = (props: Props) => {
  const { expandContact, handleExpandContact } = props;
  return (
    <div className="w-full h-full flex flex-col items-end">
      <motion.button
        whileHover={moveLeftWhileHover}
        className={`${type.smaller} mb-2 md:mb-1 cursor-fancy`}
        onClick={handleExpandContact}
      >
        Contact
      </motion.button>

      <AnimatePresence>
        {expandContact && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerParentContainer}
            className="w-full flex flex-col"
          >
            <ContactHyperLink
              linkPath={links.email}
              linkText="EMAIL"
              linkStyle={`${type.smaller} mb-1 text-end md:pr-[30px]`}
              motionVariant={fadeX(10, 0.5)}
            />
            <ContactHyperLink
              linkPath={links.gitHub}
              linkText="GIBHUB"
              linkStyle={`${type.smaller} mb-1 text-end md:pr-[60px]`}
              motionVariant={fadeX(10, 0.5)}
            />
            <ContactHyperLink
              linkPath={links.instagram}
              linkText="INSTAGRAM"
              linkStyle={`${type.smaller} text-end md:pr-[90px]`}
              motionVariant={fadeX(10, 0.5)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
