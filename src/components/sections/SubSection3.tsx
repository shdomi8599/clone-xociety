import styled from "@emotion/styled";

import { useScrollToggle } from "@/hooks/useScrollToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import Content from "./contents/Content";

const pageIndex = "03";

const numberPageIndex = Number(pageIndex);

const SubSection3 = () => {
  const { bgRef, contentRef, isOdd } = useScrollToggle({
    numberPageIndex,
  });

  return (
    <SubSectionLayout height={1181} zIndex={numberPageIndex}>
      <Box ref={bgRef}>
        <ContentsBox
          isOdd={isOdd}
          contentRef={contentRef}
          numberPageIndex={numberPageIndex}
        >
          <IndexContent>{pageIndex}</IndexContent>
          <TitleItemTop className="top">There is no such thing</TitleItemTop>
          <TitleItemBottom className="bottom">
            as a free lunch in XOCIETY
          </TitleItemBottom>
          <Content>
            In XOCIETY, players are required to perform meaningful activities
            for ecosystem
            <br />
            development in order to obtain valuable assets. Gamers pay for
            engaging content
            <br />
            and this is coupled with XOCIETY&apos;s traditional revenue
            generating models, which
            <br />
            will make a sustainable economy possible.
          </Content>
        </ContentsBox>
      </Box>
    </SubSectionLayout>
  );
};

export default SubSection3;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/${pageIndex}/${pageIndex}-updated.webp") no-repeat center
    center;
  background-size: cover;
  margin-right: -100px;
`;

const TitleItemTop = styled.h3`
  position: relative;
  display: inline-block;
  background: white;
  color: black;
  padding: 28px 40px 16px 28px;
  z-index: -1;
  font-style: normal;
  font-weight: 700;
  margin-top: -100px;
  font-size: 4.375rem;
  line-height: 4.375rem;
`;

const TitleItemBottom = styled.h3`
  color: black;
  background: rgb(255, 254, 1);
  z-index: 4;
  padding: 28px 14px 22px 32px;
  margin-left: 52px;
  margin-top: -8px;
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 4.375rem;
`;
