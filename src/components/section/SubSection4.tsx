import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const SubSection4 = () => {
  const { target } = useScrollClassToggle({ type: "even", wantTop: 3600 });

  return (
    <SubSectionForm height={1191} zIndex={4}>
      <LUImage src={"/04/04-LU.png"} alt="LU" width={304} height={97} />
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection4;

const LUImage = styled(Image)`
  position: absolute;
  top: 20px;
  left: 51px;
  z-index: 5;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  background: url("/04/04.webp") no-repeat center center;
  background-size: cover;
  margin-left: -100px;
  clip-path: polygon(0px 0px, 0px 100%, 30200px 100%);
`;
