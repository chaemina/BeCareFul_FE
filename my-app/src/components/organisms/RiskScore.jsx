import Title from "../atoms/Title";
import styled from "styled-components";
import Inner from "../atoms/Inner";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StyledBase = styled.div`
  position: relative;
  height: 60px;
  border: 3px solid;
  width: 600px; /* 예시로 600px로 지정 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 설정합니다. */
`;

const StyledRange = styled.div`
  width: 0%;
  height: 100%;
  background: linear-gradient(to right, #ffacfc, #b76cfd); // 그라데이션 설정
  transition: width 2s; // 너비 변화에 대한 트랜지션 추가
`;

const RiskScore = ({ risk_score, delay }) => {
  const scoreRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateWidth = () => {
      return Math.min(risk_score * 1000, 100); // risk_score을 퍼센트로 계산
    };

    const animateScore = () => {
      if (scoreRef.current) {
        gsap.to(scoreRef.current, {
          width: `${calculateWidth()}%`, // 계산된 너비 적용
          opacity: 1,
          duration: 0.1,
          delay: delay || 0,
          onComplete: () => setIsVisible(true),
        });
      }
    };

    animateScore();
  }, [delay, risk_score]);

  return (
    <>
      <Inner className="min-w-full">
        <StyledBase>
          <StyledRange ref={scoreRef} style={{ opacity: isVisible ? 1 : 0 }} />
        </StyledBase>
      </Inner>
    </>
  );
};

export default RiskScore;
