import Container from "../atoms/Container";
import Inner from "../atoms/Inner";

const Main = ({ similar_jachigu }) => {
  return (
    <Container>
      <Inner>"{similar_jachigu}" 에서의 분실물 개수</Inner>
      {/* <div> 위험도 : {risk_score} </div>
        <div>
          {" "}
          위험 수준이 {risk_level} 입니다. {message}
        </div> */}
    </Container>
  );
};

export default Main;
