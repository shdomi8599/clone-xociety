import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const SubSection3 = () => {
  const { target } = useScrollClassToggle({ type: "odd", wantTop: 2300 });

  return (
    <SubSectionForm height={1181} zIndex={3}>
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection3;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/03/03-updated.webp") no-repeat center center;
  background-size: cover;
  margin-right: -100px;
`;
