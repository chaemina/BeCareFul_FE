import styled from "styled-components";

const StyledButton = styled.div`
  width: 160px;
  padding: 10px;
  border: 2px solid #ffff;
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
const Button = ({ children, className }) => {
  return (
    <>
      <StyledButton className={`${className}`}>{children}</StyledButton>
    </>
  );
};

export default Button;
