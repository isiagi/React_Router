import React from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  const getStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <div>
      <nav className={style.container}>
        <h1>LOGO</h1>
        <ul className={style.navList}>
          <Link to="/" style={getStyle}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={getStyle}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
