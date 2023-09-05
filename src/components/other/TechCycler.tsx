import { useEffect, useState } from "react";
import { type } from "../../tailwind-utils";
import { techUsed } from "../../data";
import { motion } from "framer-motion";
import { fadeDown } from "../../motion";

export const TechCycler = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, wrapping around if necessary
      const nextIndex = (currentTechIndex + 1) % techUsed.length;
      setCurrentTechIndex(nextIndex);
    }, 2500); // Update every 1000 milliseconds (1 second)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentTechIndex]);

  return (
    <motion.div
      key={currentTechIndex}
      initial="hidden"
      animate="visible"
      variants={fadeDown(3, 1.5)}
    >
      <p className={`${type.small}`}>{techUsed[currentTechIndex]}</p>
    </motion.div>
  );
};
