import { useEffect, useState } from "react";
import { useDetectScreenSize } from "./useDetectScreenSize";

export const useCalculateZipPosition = () => {
  const [xPosition, setXPosition] = useState(0);
  const [thresholdX, setThresholdX] = useState(0);

  const {
    isPortrait,
    isMediumScreen,
    isSmallScreen,
    isLargeScreen,
    includesZip,
  } = useDetectScreenSize();

  console.log({ isPortrait });
  console.log({ isSmallScreen });

  const calculateZipPositions = () => {
    if (isMediumScreen) {
      const xPosition = -4;
      const thresholdX = 4;
      return { xPosition, thresholdX };
    }
    if (isSmallScreen && isPortrait) {
      const xPosition = -1.8;
      const thresholdX = 1.8;
      return { xPosition, thresholdX };
    }
    if (isLargeScreen) {
      const xPosition = -5;
      const thresholdX = 5;
      return { xPosition, thresholdX };
    }
    if (includesZip) {
      const xPosition = -6;
      const thresholdX = 6;
      return { xPosition, thresholdX };
    }
    return { xPosition: -6, thresholdX: 6 };
  };

  useEffect(() => {
    const { xPosition, thresholdX } = calculateZipPositions();
    setXPosition(xPosition);
    setThresholdX(thresholdX);

    return () => {
      window.removeEventListener("resize", updateInitialXPosition);
    };
  }, []);

  const updateInitialXPosition = () => {
    const { xPosition, thresholdX } = calculateZipPositions();
    setXPosition(xPosition);
    setThresholdX(thresholdX);
  };

  // Add an event listener for the 'resize' event
  useEffect(() => {
    window.addEventListener("resize", updateInitialXPosition);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateInitialXPosition);
    };
  }, []);

  return {
    xPosition,
    thresholdX,
  };
};
