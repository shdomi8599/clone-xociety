import styled from "@emotion/styled";

import { ContentProps } from "@/types";

interface Props extends ContentProps {
  color?: string;
}

const IndexContent = (props: Props) => {
  return <Box {...props} />;
};

export default IndexContent;

const Box = styled.h2`
  -webkit-text-stroke: 1px ${({ color }) => (color ? color : "#1f2535")} !important;
  color: transparent;
  font-size: 17.625rem;
`;
