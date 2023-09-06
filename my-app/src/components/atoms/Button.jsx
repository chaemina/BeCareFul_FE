import styled from "styled-components";

const StyledButton = styled.div`
  min-width: 160px;
  border: 2px solid #ffff;
  padding: 10px;
  border-radius: 4px;
  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;

  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

const StyledButton2 = styled.div`
  min-width: 160px;
  border: 2px solid #ffff;
  padding: 20px 70px 20px;
  border-radius: 4px;
  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;

  &:hover {
    border: 2px solid #ffe500;
    background-color: #ffe500;
    color: #333;
  }
`;

export const BasicButton = ({ children, className, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick} className={`${className}`}>
        {children}
      </StyledButton>
    </>
  );
};

export const KakaoButton = ({ children, className, onClick }) => {
  return (
    <>
      <StyledButton2 onClick={onClick} className={`${className}`}>
        {children}
      </StyledButton2>
    </>
  );
};
