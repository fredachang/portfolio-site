// useScrollPosition.js
import { useRef, useState, useEffect } from "react";

export function useDetectScrollX() {
  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (scrollSectionRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollSectionRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollPosition(scrollLeft / maxScroll);
    }
  };

  useEffect(() => {
    if (scrollSectionRef.current) {
      scrollSectionRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollSectionRef.current) {
        scrollSectionRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return { scrollSectionRef, scrollPosition };
}
