import React from "react";
import { useMediaQuery } from "react-responsive";

// 반응형 레이아웃
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });

  return <>{isPc && children}</>;
};
