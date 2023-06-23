import styled from "@emotion/styled";

import { ReactNode } from "react";

type Props = {
  height: number;
  zIndex: number;
  children: ReactNode;
};

const SubSectionForm = ({ height, zIndex, children }: Props) => {
  return <Box height={height} zIndex={zIndex} children={children} />;
};

export default SubSectionForm;

const Box = styled.section<Props>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  margin-top: -110px;
  overflow: hidden;
`;
