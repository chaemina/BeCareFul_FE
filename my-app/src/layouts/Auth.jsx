import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      // alert 대신에 그냥 로그인 페이지로 이동
      // alert("로그인이 필요한 서비스입니다.");
      navigate("/goLogin");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default RequiredAuthLayout;
