import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import TitleContent from "./contents/TitleContent";
import Content from "./contents/Content";

const pageIndex = "04";

const numberPageIndex = Number(pageIndex);

const SubSection4 = () => {
  const { bgRef } = useScrollClassToggle({ numberPageIndex });

  return (
    <SubSectionLayout height={1191} zIndex={numberPageIndex}>
      <LUImage
        src={`/${pageIndex}/${pageIndex}-LU.png`}
        alt="LU"
        width={216}
        height={125}
      />
      <Box ref={bgRef}>
        <ContentsBox color="white" numberPageIndex={numberPageIndex}>
          <IndexContent color="white">{pageIndex}</IndexContent>
          <TitleContent>
            Build your own
            <br />
            world on Land NFTs
          </TitleContent>
          <Content>
            XOCIETY's Dev team has extensively researched the current Web3
            <br />
            environment as well as the current experience of the "Metaverse".
            <br />
            presented top-down to users in which land sale precedes development.
            <br />
            XOCIETY will be built step by step by users who develop the
            metaverse
            <br />
            and in turn are rewarded by opportunities for land sale and
            resources.
          </Content>
        </ContentsBox>
      </Box>
    </SubSectionLayout>
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
