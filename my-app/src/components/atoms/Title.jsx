import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Title = ({ children, className, delay }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animateTitle = () => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          opacity: 1,
          duration: 2, // 각 타이틀이 나타나는 시간을 1초로 설정
          delay: delay || 0, // delay prop으로 전달된 값을 사용하거나 기본값 0 사용
          onComplete: () => setIsVisible(true), // 애니메이션 완료 후 isVisible을 true로 설정
        });
      }
    };

    animateTitle();
  }, [delay]);

  return (
    <div
      className={`relative bottom-20 mt-2 text-purple-300 font-bold text-8xl ${className}`}
      ref={textRef}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

export default Title;
