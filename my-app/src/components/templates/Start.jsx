import Container from "../atoms/Container";
import Inner from "../atoms/Inner";
import Title from "../atoms/Title";
import { BasicButton } from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    console.log("click");
    // navigate("/user/main");
    navigate("/main");
  };

  return (
    <>
      <Container>
        <Inner>
          <Title delay={0}>USE</Title>
          <Title delay={1.5}>비케어플</Title>
          <Title delay={2.5}>FOR</Title>
          <Title delay={3.5}>BeCareful</Title>
        </Inner>
        <Inner>
          <BasicButton
            onClick={handleOnclick}
            className="absolute p-2 bottom-2 right-0"
          >
            시작하기
          </BasicButton>
        </Inner>
      </Container>
    </>
  );
};
export default Start;
