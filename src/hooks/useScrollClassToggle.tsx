import { useEffect, useRef } from "react";

export const useScrollClassToggle = () => {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const boxOffsetTop = target.current?.scrollHeight || 0;
      const scrollY = window.scrollY;

      const isView = scrollY > boxOffsetTop - 700;

      target.current?.classList.toggle("animate", isView);
      target.current?.classList.toggle("reverse-animate", !isView);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return { target };
};
