import styled from "@emotion/styled";

import { ContentProps } from "@/types";

interface Props extends ContentProps {
  numberPageIndex: number;
}

const ContentsBox = ({ numberPageIndex, children }: Props) => {
  return <Box numberPageIndex={numberPageIndex} children={children} />;
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
  }

  div {
    width: 100%;
    height: 1px;
    background: transparent;
  }
`;
