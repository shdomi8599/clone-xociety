import styled from "@emotion/styled";

import { ReactNode, RefObject } from "react";

interface Props extends BoxProps {
  color?: string;
  contentRef: RefObject<HTMLDivElement>;
}

const ContentsBox = ({
  numberPageIndex,
  color,
  contentRef,
  children,
  isOdd,
}: Props) => {
  return (
    <Box
      isOdd={isOdd}
      numberPageIndex={numberPageIndex}
      color={color}
      ref={contentRef}
    >
      {children}
    </Box>
  );
};

export default ContentsBox;

interface BoxProps {
  numberPageIndex: number;
  isOdd: boolean;
  children: ReactNode;
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
