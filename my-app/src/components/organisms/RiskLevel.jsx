import Title from "../atoms/Title";
import styled from "styled-components";
import "../organisms/RiskLevel.css";

const RiskLevel = ({ risk_level, message }) => {
  return (
    <>
      <div className="level"></div>
      <Title className="text-sm">{risk_level}</Title>
      <Title className="text-sm">{message}</Title>x
    </>
  );
};

export default RiskLevel;
