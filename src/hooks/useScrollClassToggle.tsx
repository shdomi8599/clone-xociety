import { useEffect, useRef } from "react";

type Props = {
  numberPageIndex: number;
};

export const useScrollClassToggle = ({ numberPageIndex }: Props) => {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetTop = target.current?.getBoundingClientRect().y;

      const isView = Math.abs(targetTop as number) < 500;

      const isOdd = numberPageIndex % 2 === 1;

      target.current?.classList.toggle(
        isOdd ? "odd-animate" : "even-animate",
        isView
      );

      target.current?.classList.toggle(
        isOdd ? "odd-reverse-animate" : "even-reverse-animate",
        !isView
      );
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return { target };
};
