import Image from "next/image";
import styled from "@emotion/styled";

import { useScrollClassToggle } from "@/hooks/useScrollClassToggle";

import SubSectionForm from "./SubSectionForm";

const SubSection6 = () => {
  const { target } = useScrollClassToggle({ type: "even", wantTop: 6000 });

  return (
    <SubSectionForm height={1191} zIndex={6}>
      <Box ref={target}></Box>
    </SubSectionForm>
  );
};

export default SubSection6;

const Box = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  background: url("/06/06.webp") no-repeat center center;
  background-size: cover;
  margin-left: -100px;
  clip-path: polygon(0px 0px, 0px 100%, 40200px 100%);
`;
