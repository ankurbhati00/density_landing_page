import React from "react";
import {
  statisticsContainer,
  boxContainer,
  phonesContainer,
  tradeMoreContainer,
  coinComparison,
  exploreContainer,
  coinChartContainer,
  exploreMarketBtn,
  unlockContainer,
  overviewContainer,
  overviewBox,
  BSTDIMG,
} from "../styles/main.module.css";
import phone1 from "../assets/phone_single1.png";
import phone2 from "../assets/phone_single2.png";
import phone3 from "../assets/phone_single3.png";
import coinComparisonImg from "../assets/coin_exchange_images.png";
import coinChart from "../assets/coin_charts_img.png";
import BTCUSTD_Img from "../assets/BTCUSTD_Img.png";
export function Main() {
  return (
    <>
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
          <div className={boxContainer} style={{ border: "none" }}>
            <h1>15000+</h1>
            <h4>Traders</h4>
          </div>
        </div>
      </div>
      <div className={phonesContainer}>
        <div>
          <img src={phone1} alt="phone1"></img>
        </div>
        <div>
          <img src={phone2} alt="phone2"></img>
        </div>
        <div>
          <img src={phone3} alt="phone2"></img>
        </div>
      </div>
      <section className={tradeMoreContainer}>
        <h1>
          Trade More. <p>Pay Less.</p>
        </h1>
        <h5>Our low Fees Supercharge Your Profits</h5>
        <div className={coinComparison}>
          <img src={coinComparisonImg}></img>
        </div>
      </section>
      <section className={exploreContainer}>
        <div>
          <h1>
            Explore the Markets
            <br /> like It your <p>Playground.</p>
          </h1>
          <h5>Search for your favourite coins and stay ahead of the market</h5>
        </div>
        <div className={coinChartContainer}>
          <img src={coinChart}></img>
          <button className={exploreMarketBtn}>Explore Markets</button>
        </div>
      </section>
      <section className={unlockContainer}>
        <div>
          <h1>
            <p>Unlock</p> New Frontiers.
          </h1>
          <h5>
            Are you a stock trader looking for new opportunities to make <br />
            money?We got you covered!
          </h5>
        </div>
      </section>
      <section>
        <div className={overviewContainer}>
          <div>
            <div className={overviewBox}>
              <h1>
                Same
                <br /> strategies
              </h1>
            </div>
            <div className={overviewBox}>
              <h1>
                Same
                <br /> Indicators
              </h1>
            </div>
            <div className={overviewBox}>
              <h1>
                Better
                <br />
                Leverage
              </h1>
            </div>
            <div className={overviewBox} style={{ border: "none" }}>
              <h1>
                24x7
                <br />
                Trading
              </h1>
            </div>
          </div>
        </div>
        <div className={BSTDIMG}>
          <img src={BTCUSTD_Img}></img>
        </div>
      </section>
    </>
  );
}
