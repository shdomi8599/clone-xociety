import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const pageIndex = "04";

const numberPageIndex = Number(pageIndex);

const SubSection4 = () => {
  const { target } = useScrollClassToggle({ numberPageIndex, wantTop: 3600 });

  return (
    <SubSectionForm height={1191} zIndex={numberPageIndex}>
      <LUImage
        src={`/${pageIndex}/${pageIndex}-LU.png`}
        alt="LU"
        width={216}
        height={125}
      />
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection4;

const LUImage = styled(Image)`
  position: absolute;
  top: 20px;
  left: 51px;
  z-index: ${numberPageIndex + 1};
`;

const Box = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  background: url("/${pageIndex}/${pageIndex}.webp") no-repeat center center;
  background-size: cover;
  margin-left: -100px;
  clip-path: polygon(0px 0px, 0px 100%, 30200px 100%);
`;
