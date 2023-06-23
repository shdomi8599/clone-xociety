import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const SubSection2 = () => {
  const { target } = useScrollClassToggle({ type: "even" });

  return (
    <SubSectionForm height={1191} zIndex={2}>
      <LUImage src={"/02/02-LU.png"} alt="LU" width={304} height={97} />
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection2;

const LUImage = styled(Image)`
  position: absolute;
  top: 38px;
  left: 51px;
  z-index: 3;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  background: url("/02/02.webp") no-repeat center center;
  background-size: cover;
  margin-left: -100px;
  clip-path: polygon(0 0, 0 100%, 30200px 100%);
`;
