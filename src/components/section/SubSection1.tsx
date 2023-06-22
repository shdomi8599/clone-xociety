import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useRef } from "react";

import SubSectionForm from "./SubSectionForm";

const SubSection1 = () => {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const boxOffsetTop = target.current?.scrollHeight || 0;
      const scrollY = window.scrollY;

      const isView = scrollY > boxOffsetTop - 400;

      target.current?.classList.toggle("animate", isView);
      target.current?.classList.toggle("reverse-animate", !isView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SubSectionForm height={1181} zIndex={1}>
      <LUImage src={"/01/01-LU.png"} alt="LU" width={493} height={95} />
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection1;

const LUImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 14px;
  z-index: 1;
`;

const animateBackground = keyframes`
  0% {
    background-position: -100px;
  }
  100% {
    background-position: 0px;
  }
`;

const reverseAnimateBackground = keyframes`
  0% {
    background-position: 0px;
  }
  100% {
    background-position: -100px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/01/01.webp") no-repeat center center;
  background-size: cover;
  margin-right: -100px;
  background-position: -100px;
  clip-path: polygon(0 110px, 100% 0, 100% 100%, 0 100%);

  &.animate {
    background-position: 0px;
    animation: ${animateBackground} 0.3s linear;
  }

  &.reverse-animate {
    background-position: -100px;
    animation: ${reverseAnimateBackground} 0.3s linear;
  }
`;
