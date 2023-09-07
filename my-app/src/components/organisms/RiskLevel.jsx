import Title from "../atoms/Title";
import styled from "styled-components";
import "../organisms/RiskLevel.css";

const RiskLevel = ({ risk_level, message }) => {
  let circleClass = "circle";

  switch (risk_level) {
    case "매우위험":
      circleClass = "red";
      break;
    case "높음":
      circleClass = "orange";
      break;
    case "보통":
      circleClass = "yellow";
      break;
    case "낮음":
      circleClass = "green";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="level">
        <div className={`circle  ${circleClass === "green" ? "good" : ""}`}>
          <div className="material-symbols-outlined relative text-[60px]">
            sentiment_satisfied
          </div>
        </div>
        <div className={`circle  ${circleClass === "yellow" ? "normal" : ""}`}>
          <div className="material-symbols-outlined relative text-[60px]">
            sentiment_neutral
          </div>
        </div>
        <div className={`circle  ${circleClass === "orange" ? "bad" : ""}`}>
          <span className="material-symbols-outlined relative text-[60px]">
            mood_bad
          </span>
        </div>
        <div className={`circle  ${circleClass === "red" ? "becareful" : ""}`}>
          <div className="material-symbols-outlined relative text-[60px]">
            sentiment_extremely_dissatisfied
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskLevel;
