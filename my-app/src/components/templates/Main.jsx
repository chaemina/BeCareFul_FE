import Container from "../atoms/Container";
import Inner from "../atoms/Inner";
import Title from "../atoms/Title";
import RiskScore from "../organisms/RiskScore";
import RiskLevel from "../organisms/RiskLevel";
import { RoundButton } from "../atoms/Button";

const Main = ({ similar_jachigu, risk_score, risk_level, message }) => {
  return (
    <Container>
      <Inner>
        {/* 자치구 */}
        <Title delay={0.6} className="text-6xl">
          {similar_jachigu}
        </Title>
        <Title delay={1} className="text-white text-3xl">
          에서의 분실 위험도{" "}
        </Title>
      </Inner>
      {/* 위험도 */}
      <Inner>
        <RiskScore risk_score={risk_score} />
      </Inner>
      {/*  위험 수준 */}
      <Inner>
        <RiskLevel risk_level={risk_level} message={message} />
      </Inner>
      {/* 자세히 보기 페이지로 이동 버튼 */}
      <Inner>
        <RoundButton>
          <span class="material-symbols-outlined text-8xl">chevron_right</span>
        </RoundButton>
      </Inner>
    </Container>
  );
};

export default Main;
