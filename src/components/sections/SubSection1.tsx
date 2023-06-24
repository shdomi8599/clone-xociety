import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import TitleContent from "./contents/TitleContent";
import Content from "./contents/Content";

const pageIndex = "01";

const numberPageIndex = Number(pageIndex);

const SubSection1 = () => {
  const { bgRef } = useScrollClassToggle({ numberPageIndex });

  return (
    <SubSectionLayout height={1181} zIndex={numberPageIndex}>
      <LUImage
        src={`/${pageIndex}/${pageIndex}-LU.png`}
        alt="LU"
        width={493}
        height={95}
      />
      <Box ref={bgRef}>
        <ContentsBox numberPageIndex={numberPageIndex}>
          <IndexContent>{pageIndex}</IndexContent>
          <TitleContent>
            XOCIETY is a metaverse
            <br />
            with shooter mechanics at
            <br />
            its core
          </TitleContent>
          <Content>
            Starting with a well developed MMOTPS core, progressing to
            <br />
            land and resource ownership with robust tokenomics and creator
            economy.
            <br />
            The game and metaverse is being developed by a well established
            <br />
            team of over 50 developers with decades of experience in the tech
            <br />
            and web2 gaming fields. Join XOCIETY if you're ready to build your
            own metaverse!
          </Content>
        </ContentsBox>
      </Box>
    </SubSectionLayout>
  );
};

export default SubSection1;

const LUImage = styled(Image)`
  position: absolute;
  top: 14px;
  left: 0;
  z-index: ${numberPageIndex + 1};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/${pageIndex}/${pageIndex}.webp") no-repeat center center;
  background-size: cover;
  margin-right: -100px;
  clip-path: polygon(0 110px, 100% 0, 100% 100%, 0 100%);
`;
