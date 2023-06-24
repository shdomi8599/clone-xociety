import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import TitleContent from "./contents/TitleContent";
import Content from "./contents/Content";

const pageIndex = "06";

const numberPageIndex = Number(pageIndex);

const SubSection6 = () => {
  const { bgRef, contentRef, isOdd } = useScrollClassToggle({
    numberPageIndex,
  });

  return (
    <SubSectionLayout height={1191} zIndex={numberPageIndex}>
      <Box ref={bgRef}>
        <ContentsBox
          isOdd={isOdd}
          contentRef={contentRef}
          numberPageIndex={numberPageIndex}
        >
          <IndexContent>{pageIndex}</IndexContent>
          <TitleContent>Read more on XOCIETY</TitleContent>
          <Content>
            Click here to read the full article
            <br />
            on "What is XOCIETY?"
          </Content>
        </ContentsBox>
      </Box>
    </SubSectionLayout>
  );
};

export default SubSection6;

const Box = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  background: url("/${pageIndex}/${pageIndex}.webp") no-repeat center center;
  background-size: cover;
  margin-left: -100px;
  clip-path: polygon(0px 0px, 0px 100%, 40200px 100%);
`;
