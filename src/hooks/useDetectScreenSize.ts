import { useEffect, useState } from "react";

export const useDetectScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth < 680;
  const isMediumScreen = screenWidth >= 681 && screenWidth <= 1007;
  const isLargeScreen = screenWidth >= 1008;
  const isXlScreen = screenWidth >= 1600;

  const includesZip = screenWidth >= 1150;

  const isPortrait = screenWidth < screenHeight;
  const isLandscape = screenWidth > screenHeight;

  return {
    isXlScreen,
    includesZip,
    isPortrait,
    isLandscape,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    screenWidth,
    screenHeight,
  };
};
