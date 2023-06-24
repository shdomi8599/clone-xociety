import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import TitleContent from "./contents/TitleContent";
import Content from "./contents/Content";

const pageIndex = "02";

const numberPageIndex = Number(pageIndex);

const SubSection2 = () => {
  const { bgRef } = useScrollClassToggle({ numberPageIndex });

  return (
    <SubSectionLayout height={1191} zIndex={numberPageIndex}>
      <LUImage
        src={`/${pageIndex}/${pageIndex}-LU.png`}
        alt="LU"
        width={304}
        height={97}
      />
      <Box ref={bgRef}>
        <ContentsBox color="white" numberPageIndex={numberPageIndex}>
          <IndexContent color="white">{pageIndex}</IndexContent>
          <TitleContent>
            AAA Shooter Action
            <br />
            with RPG Progression
          </TitleContent>
          <Content>
            Multiple systems are designed to deliver deep and
            <br />
            meaningful character progression. A highly detailed,
            <br />
            fully immersive visualization of the player's progression
            <br />
            allows players to "empathize" & "immerse" themselves into a virtual
            self.
          </Content>
        </ContentsBox>
      </Box>
    </SubSectionLayout>
  );
};

export default SubSection2;

const LUImage = styled(Image)`
  position: absolute;
  top: 38px;
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
  clip-path: polygon(0 0, 0 100%, 30200px 100%);
`;
