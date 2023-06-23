import { useEffect, useRef } from "react";

type Props = {
  numberPageIndex: number;
  wantTop: number;
};

export const useScrollClassToggle = ({ numberPageIndex, wantTop }: Props) => {
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const isView = scrollY > wantTop;

      const isOdd = numberPageIndex % 2 === 1;

      if (isOdd) {
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
