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
        CollectionArea
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
