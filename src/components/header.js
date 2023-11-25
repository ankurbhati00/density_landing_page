import React from "react";
import {
  headLine,
  bottomText,
  iphoneContainer,
  statisticsContainer,
  boxContainer,
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
        <img src={iphoneImage}></img>
      </div>
      <div className={statisticsContainer}>
        <div>
          <div className={boxContainer}>
            <h1>00%</h1>
            <h4>Conversion Fee</h4>
          </div>
          <div className={boxContainer}>
            <h1>500Mn+</h1>
            <h4>Lifetime Volume Trade</h4>
          </div>
          <div className={boxContainer}>
            <h1>250+</h1>
            <h4>Total Tradable Pairs</h4>
          </div>
          <div className={boxContainer} style={{border:'none'}}>
            <h1>15000+</h1>
            <h4>Traders</h4>
          </div>
        </div>
      </div>
      <div>
        <div><img src={}></img></div>
      </div>
    </header>
  );
}
