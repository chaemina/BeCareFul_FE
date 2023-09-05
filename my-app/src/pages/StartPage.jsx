import Container from "../components/atoms/Container";
import Inner from "../components/atoms/Inner";
import { Mobile, PC } from "../components/atoms/Resoinsive";
import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";

const StartPage = () => {
  return (
    <>
      {/* PC */}
      <PC>
        <Container>
          <Inner>
            <Title delay={0}>USE</Title>
            <Title delay={1.5}>비케어플</Title>
            <Title delay={2.5}>FOR</Title>
            <Title delay={3.5}>BeCareful</Title>
          </Inner>
          <Inner>
            <Button className="absolute bottom-2 right-0">시작하기</Button>
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
