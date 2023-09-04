const Main = ({
  similar_jachigu,
  risk_score,
  message,
  risk_level,
  missing_items_count,
}) => {
  return (
    <div>
      <>
        <div>
          "{similar_jachigu}" 에서의 분실물 개수 : {missing_items_count} 개
        </div>
        <div> 위험도 : {risk_score} </div>
        <div>
          {" "}
          위험 수준이 {risk_level} 입니다. {message}
        </div>
      </>
    </div>
  );
};

export default Main;
