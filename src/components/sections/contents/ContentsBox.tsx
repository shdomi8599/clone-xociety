import styled from "@emotion/styled";

import { ContentProps } from "@/types";
import { RefObject } from "react";

interface Props extends ContentProps {
  numberPageIndex: number;
  color?: string;
  ref: RefObject<HTMLDivElement>;
}

const ContentsBox = (props: Props) => {
  const isOdd = props.numberPageIndex % 2 === 1;

  return <Box isOdd={isOdd} {...props} />;
};

export default ContentsBox;

interface BoxProps extends Props {
  isOdd: boolean;
}

const Box = styled.div<BoxProps>`
  position: relative;
  z-index: ${({ numberPageIndex }) => numberPageIndex + 1};
  margin-left: ${({ isOdd }) => (isOdd ? "74px" : "")};
  margin-right: ${({ isOdd }) => (isOdd ? "" : "74px")};
  margin-top: -124px;
  opacity: 1;
  text-align: ${({ isOdd }) => (isOdd ? "" : "end")};

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
