import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <Link className="navbarMenu" to={"/"}>
        CoinInfoModuleCss
      </Link>
      <Link className="navbarMenu" to={"/coinmuigrid"}>
        CoinMuiGrid
      </Link>
      <Link className="navbarMenu" to={"/collection-area"}>
        수집 지역
      </Link>
      <Link className="navbarMenu" to={"/getUltraSrtNcst"}>
        초단기 실황
      </Link>
      <Link className="navbarMenu" to={"/posting"}>
        Posting
      </Link>
      <Link className="navbarMenu" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
}

export default Nav;
