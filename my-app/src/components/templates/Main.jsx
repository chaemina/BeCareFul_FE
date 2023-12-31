import Container from "../atoms/Container";
import Inner from "../atoms/Inner";
import Title from "../atoms/Title";
import RiskScore from "../organisms/RiskScore";
import RiskLevel from "../organisms/RiskLevel";
import { RoundButton } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = ({ similar_jachigu, risk_score, risk_level, message }) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    console.log("click");
    navigate("/more");
  };

  return (
    <Container>
      <Inner>
        {/* 자치구 */}
        <div style={{ display: "flex" }}>
          <Title delay={0.6} className="text-[60px]">
            {similar_jachigu}
          </Title>
          <Title delay={1} className="flex text-white text-[40px]">
            현 위치
          </Title>
        </div>
        <Title delay={1} className="text-white left-36 text-[40px]">
          분실 위험도{" "}
        </Title>
      </Inner>
      {/* 위험도 */}
      <Inner className="min-h-[60px]">
        <Title delay={3} className="mt-4 text-[40px]">
          {risk_score * 100}%
        </Title>
        <Title delay={4} className="relative  mt-4 text-[55px] text-right">
          {risk_level}
        </Title>
        <RiskScore delay={1} risk_score={risk_score} />
      </Inner>

      {/* 위험 수준 */}
      <Inner className="top-20 min-h-[120px]">
        <Title delay={4.5} className="top-20 text-white text-[20px] text-right">
          {message}
        </Title>
        <RiskLevel risk_level={risk_level} message={message} />
      </Inner>

      {/* 자세히 보기 페이지로 이동 버튼 */}

      <Inner className="min-w-full">
        <RoundButton
          className="absolute p-2 top-10 right-4"
          onClick={handleOnclick}
        >
          <span className="material-symbols-outlined text-8xl">
            chevron_right
          </span>
        </RoundButton>
      </Inner>
    </Container>
  );
};

export default Main;
