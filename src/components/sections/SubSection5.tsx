import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollToggle } from "@/hooks/useScrollToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import TitleContent from "./contents/TitleContent";
import Content from "./contents/Content";

const pageIndex = "05";

const numberPageIndex = Number(pageIndex);

const SubSection5 = () => {
  const { bgRef, contentRef, isOdd } = useScrollToggle({
    numberPageIndex,
  });

  return (
    <SubSectionLayout height={1461} zIndex={numberPageIndex}>
      <LUImage
        src={`/${pageIndex}/${pageIndex}-LU.png`}
        alt="LU"
        width={171}
        height={131}
      />
      <Box ref={bgRef}>
        <ItemBgBox />
        <ContentsBox
          isOdd={isOdd}
          contentRef={contentRef}
          color="white"
          numberPageIndex={numberPageIndex}
        >
          <IndexContent color="white">{pageIndex}</IndexContent>
          <TitleContent>
            ALL Your Interoperable NFTs
            <br />
            Become REALITY
          </TitleContent>
          <Content>
            XOCIETY aims to achieve two-way interoperability of NFTs.
            <br />
            Deep integration into Internal & External Transfers within XOCIETY.
            <br />
            Actively partnering with major projects to achieve the Web3 promise
            of interoperability.
          </Content>
        </ContentsBox>
      </Box>
    </SubSectionLayout>
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
  margin-top: -10px;
  padding-top: 100px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ItemBgBox = styled.div`
  background: url("/${pageIndex}/${pageIndex}-item.webp") no-repeat center
    center;
  height: 80%;
  width: 100%;
  margin-bottom: 200px;
  position: absolute;
`;
