import Container from "../components/atoms/Container";
import Inner from "../components/atoms/Inner";
import { Mobile, PC } from "../components/atoms/Resoinsive";

const StartPage = () => {
  return (
    <>
      {/* PC */}
      <PC>
        <Container>
          <Inner>
            <div>PC</div>
          </Inner>
          <Inner>
            <div>웹</div>
          </Inner>
        </Container>
      </PC>

      {/* 모바일 */}
      <Mobile>
        <Container className="text-blue-500">
          <Inner>
            <div>Mobile</div>
          </Inner>
          <Inner>
            <div>모바일</div>
          </Inner>
        </Container>
      </Mobile>
    </>
  );
};

export default StartPage;
