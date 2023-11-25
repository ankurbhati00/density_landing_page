import {
  navBar,
  navBarContainer,
  tradeNowBtn,
} from "../styles/navbar.module.css";
import React from "react";
import brandLogo from "../assets/brand-logo.png";
export function Navbar() {
  return (
    <nav className={navBar}>
      <div >
        <img src={brandLogo} alt="destiny logo"></img>
      </div>
      <ul className={navBarContainer}>
        <li>Career</li>
        <li>Blogs</li>
        <li>Leaderboard</li>
        <li>Fees</li>
        <li>
          <button className={tradeNowBtn}>Trade Now</button>
        </li>
      </ul>
    </nav>
  );
}
