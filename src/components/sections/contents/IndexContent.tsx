import styled from "@emotion/styled";

import { ContentProps } from "@/types";

const IndexContent = (props: ContentProps) => {
  return <Box {...props} />;
};

export default IndexContent;

const Box = styled.h2`
  -webkit-text-stroke: 1px #1f2535;
  color: transparent;
  font-size: 17.625rem;
`;
