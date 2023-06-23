import { useEffect, useRef } from "react";

type Props = {
  type: "odd" | "even";
  wantTop: number;
};

export const useScrollClassToggle = ({ type, wantTop }: Props) => {
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const isView = scrollY > wantTop;

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
