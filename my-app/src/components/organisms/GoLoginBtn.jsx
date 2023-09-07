import { KakaoButton } from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const GoLoginBtn = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("click");
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
    <>
      <KakaoButton onClick={handleOnClick} className="">
        카카오계정 로그인{" "}
      </KakaoButton>
    </>
  );
};

export default GoLoginBtn;
