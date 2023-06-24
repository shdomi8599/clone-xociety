import styled from "@emotion/styled";

import { ContentProps } from "@/types";

const Content = (props: ContentProps) => {
  return <Box {...props} />;
};

export default Content;

const Box = styled.p`
  margin-top: 20px;
  white-space: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.75rem;
`;
