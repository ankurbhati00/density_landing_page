import React from "react";
import {
  headLine,
  bottomText,
  iphoneContainer,
  
} from "../styles/header.module.css";
import iphoneImage from "../assets/iphone.png";



export function Header() {
  return (
    <header>
      <div className={headLine}>
        It's time to trade,
        <br />
        the <b>future.</b>
      </div>
      <div className={bottomText}>
        Trade BTC, ETH Futures With 125x Leverage and Earn Rewards.
      </div>
      <div className={iphoneContainer}>
        <img src={iphoneImage} alt="iphones"></img>
      </div>
      
    </header>
  );
}
