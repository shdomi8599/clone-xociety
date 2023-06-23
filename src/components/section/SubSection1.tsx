import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const SubSection1 = () => {
  const { target } = useScrollClassToggle({ type: "odd" });

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
  top: 14px;
  left: 0;
  z-index: 1;
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
`;
