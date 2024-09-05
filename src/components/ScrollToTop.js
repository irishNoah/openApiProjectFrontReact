import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 시 스크롤을 상단으로 이동
  }, [pathname]); // 경로가 변경될 때마다 실행

  return null; // 이 컴포넌트는 렌더링할 내용이 없으므로 null을 반환
};

export default ScrollToTop;
