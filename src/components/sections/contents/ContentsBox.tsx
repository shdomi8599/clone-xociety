import styled from "@emotion/styled";

import { ContentProps } from "@/types";

interface Props extends ContentProps {
  numberPageIndex: number;
  color?: string;
}

const ContentsBox = (props: Props) => {
  return <Box {...props} />;
};

export default ContentsBox;

const Box = styled.div<Props>`
  position: relative;
  z-index: ${({ numberPageIndex }) => numberPageIndex + 1};
  margin-left: 74px;
  margin-top: -124px;
  opacity: 1;

  * {
    font-family: var(--font-family);
    color: ${({ color }) => (color ? color : "#1f2535")};
  }

  div {
    width: 100%;
    height: 1px;
    background: transparent;
  }
`;
