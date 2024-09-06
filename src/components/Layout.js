import React from "react";
import Header from './Header';
import Nav from './Nav';
import ScrollToTop from './ScrollToTop';
import "./Layout.module.css"

function Layout({ children }) {
  return (
    <div>
      <ScrollToTop />
      <div className="header"><Header /></div>
      <div className="nav"> <Nav /> </div>
      <div className="content">
        {children} {/* 페이지별 콘텐츠를 여기에 렌더링 */}
      </div>
    </div>
  );
}

export default Layout;
