import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const SubSection5 = () => {
  const { target } = useScrollClassToggle({ type: "odd", wantTop: 4800 });

  return (
    <SubSectionForm height={1461} zIndex={5}>
      <LUImage src={"/05/05-LU.png"} alt="LU" width={171} height={131} />
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection5;

const LUImage = styled(Image)`
  position: absolute;
  top: 192px;
  left: 51px;
  z-index: 6;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/05/05-bg.webp") no-repeat center center;
  background-size: cover;
  justify-content: center;
  margin-top: -10px;
  padding-top: 100px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
