import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Link className="headerMenu" to={"/"}>
        <h1>PCY Lab</h1>
      </Link>
    </div>
  );
}

export default Header;
