import styled from "styled-components";

const StyledInner = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  // 중앙정렬 
  justify-content : center;
  align-items : center;
  display: flex;
  flex-direction: column;
}`;

const Inner = ({ children, className }) => {
  return <StyledInner className={className}>{children}</StyledInner>;
};

export default Inner;
