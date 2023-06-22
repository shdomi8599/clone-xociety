import Image from "next/image";
import styled from "@emotion/styled";
import { useRef } from "react";

import SubSectionForm from "./SubSectionForm";

const SubSection1 = () => {
  const target = useRef<HTMLDivElement>(null);
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

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/01/01.webp") no-repeat center center;
  background-size: cover;
  margin-right: -100px;
  clip-path: polygon(0 110px, 100% 0, 100% 100%, 0 100%);
`;
