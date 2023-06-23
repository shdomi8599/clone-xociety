import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const pageIndex = "05";

const numberPageIndex = Number(pageIndex);

const SubSection5 = () => {
  const { target } = useScrollClassToggle({ numberPageIndex, wantTop: 4800 });

  return (
    <SubSectionForm height={1461} zIndex={numberPageIndex}>
      <LUImage
        src={`/${pageIndex}/${pageIndex}-LU.png`}
        alt="LU"
        width={171}
        height={131}
      />
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection5;

const LUImage = styled(Image)`
  position: absolute;
  top: 192px;
  left: 51px;
  z-index: ${numberPageIndex + 1};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/${pageIndex}/${pageIndex}-bg.webp") no-repeat center center;
  background-size: cover;
  justify-content: center;
  margin-top: -10px;
  padding-top: 100px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
