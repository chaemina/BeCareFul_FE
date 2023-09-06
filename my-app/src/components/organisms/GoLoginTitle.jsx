import Container from "../atoms/Container";
import Inner from "../atoms/Inner";
import Title from "../atoms/Title";
import { useEffect, useState } from "react";
import "../templates/GoLogin.css";
const GoLoginTitle = () => {
  const [moveTitle, setMoveTitle] = useState(false);

  useEffect(() => {
    // 0.6초 후에 타이틀을 이동하도록 설정
    const timeout = setTimeout(() => {
      setMoveTitle(true);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Title
        className={`no-wrap-text text-white text-7xl ${
          moveTitle ? "move-title" : ""
        }`}
      >
        분실물 알리미
      </Title>
      <Title
        className={`no-wrap-text mt-2 mb-2 text-7xl ${
          moveTitle ? "move-title" : ""
        }`}
      >
        비케어플
      </Title>
    </>
  );
};

export default GoLoginTitle;
