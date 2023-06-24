import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionLayout from "./SubSectionLayout";
import ContentsBox from "./contents/ContentsBox";
import IndexContent from "./contents/IndexContent";
import TitleContent from "./contents/TitleContent";
import Content from "./contents/Content";

const pageIndex = "03";

const numberPageIndex = Number(pageIndex);

const SubSection3 = () => {
  const { bgRef, contentRef } = useScrollClassToggle({ numberPageIndex });

  return (
    <SubSectionLayout height={1181} zIndex={numberPageIndex}>
      <Box ref={bgRef}>
        <ContentsBox ref={contentRef} numberPageIndex={numberPageIndex}>
          <IndexContent>{pageIndex}</IndexContent>
          <TitleContent>
            XOCIETY is a metaverse
            <br />
            with shooter mechanics at
            <br />
            its core
          </TitleContent>
          <Content>
            In XOCIETY, players are required to perform meaningful activities
            for ecosystem
            <br />
            development in order to obtain valuable assets. Gamers pay for
            engaging content
            <br />
            and this is coupled with XOCIETY's traditional revenue generating
            models, which
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
