import { useEffect, useRef } from "react";

type Props = {
  type: "odd" | "even";
};

export const useScrollClassToggle = ({ type }: Props) => {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const boxOffsetTop = target.current?.getBoundingClientRect().y || 0;
      const scrollY = window.scrollY;

      const isView = scrollY > boxOffsetTop + 500;

      if (type === "odd") {
        target.current?.classList.toggle("odd-animate", isView);
        target.current?.classList.toggle("odd-reverse-animate", !isView);
      } else {
        target.current?.classList.toggle("even-animate", isView);
        target.current?.classList.toggle("even-reverse-animate", !isView);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return { target };
};
