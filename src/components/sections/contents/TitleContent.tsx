import styled from "@emotion/styled";

import { ContentProps } from "@/types";

const TitleContent = (props: ContentProps) => {
  return <Box {...props} />;
};

export default TitleContent;

const Box = styled.h3`
  color: #1f2535;
  margin-top: -100px;
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 4.375rem;
  white-space: nowrap;
  -webkit-box-align: center;
`;
