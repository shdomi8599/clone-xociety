import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const pageIndex = "03";

const numberPageIndex = Number(pageIndex);

const SubSection3 = () => {
  const { target } = useScrollClassToggle({ numberPageIndex });

  return (
    <SubSectionForm height={1181} zIndex={numberPageIndex}>
      <Box ref={target}></Box>
    </SubSectionForm>
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
