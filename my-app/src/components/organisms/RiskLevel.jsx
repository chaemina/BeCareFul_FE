import Title from "../atoms/Title";

const RiskLevel = ({ risk_level, message }) => {
  return (
    <>
      <Title>{risk_level}</Title>
      <Title>{message}</Title>
    </>
  );
};
export default RiskLevel;
