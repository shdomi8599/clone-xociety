import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

import { isNavColorState } from "@/recoil/atom";

type Props = {
  numberPageIndex: number;
};

export const useScrollClassToggle = ({ numberPageIndex }: Props) => {
  const setIsNavColor = useSetRecoilState(isNavColorState);

  const bgRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const isOdd = numberPageIndex % 2 === 1;

  useEffect(() => {
    const handleScroll = () => {
      const targetTop = bgRef.current?.getBoundingClientRect().y;

      const isView = Math.abs(targetTop as number) < 500;

      bgRef.current?.classList.toggle(
        isOdd ? "odd-animate" : "even-animate",
        isView
      );

      bgRef.current?.classList.toggle(
        isOdd ? "odd-reverse-animate" : "even-reverse-animate",
        !isView
      );

      contentRef.current?.classList.toggle(
        "contents-animate", isView
      );

      contentRef.current?.classList.toggle(
        "reverse-contents-animate", !isView
      );

      if (numberPageIndex === 5) {
        const isNavWhite = Math.abs(targetTop as number) < 1300;

        isNavWhite ? setIsNavColor(true) : setIsNavColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return { bgRef, contentRef, isOdd };
};
