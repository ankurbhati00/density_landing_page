import React from "react";
// <-------All the styles className--->
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
  startSmallContainer,
  startSmallImagesContainer,
  derivatesContainer,
  derivatesUserGuideContainer,
  guideBox,
  iphone14ImgContainer,
  guideInfoContainer,
  backedByTheBestContainer,
} from "../styles/main.module.css";
import phone1 from "../assets/phone_single1.png";
import phone2 from "../assets/phone_single2.png";
import phone3 from "../assets/phone_single3.png";
import coinComparisonImg from "../assets/coin_exchange_images.png";
import coinChart from "../assets/coin_charts_img.png";
import BTCUSTD_Img from "../assets/BTCUSTD_Img.png";
import dedicatedManagerImage from "../assets/dedicated_manager_image.png";
import depositeBonusImage from "../assets/deposite_bonus_image.png";
import iphone14blackMockup from "../assets/iPhone_14_Pro_Mockup.png";
import iphone14blackMockup2 from "../assets/iPhone_14_Pro_Mockup2.png";
import iphone14blackMockup3 from "../assets/iPhone_14_Pro_Mockup3.png";
import userIconImage from "../assets/user_icon.png";
import oneRupeeImage from "../assets/one_rupee.png";
import arrowUpImage from "../assets/arrow_up.png";
import backedByTheBestImage from "../assets/backed_by_the_best_image.png";
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
          <img src={BTCUSTD_Img} alt="BTCUSTD"></img>
        </div>
      </section>
      {/* start small earn big section */}
      <section className={startSmallContainer}>
        <div>
          <h1>Start small. Earn Big.</h1>
          <h5>
            Deposity a minimum of 1000 and get a Deposit bonus+
            <br />
            dedicated relationship manager
          </h5>
        </div>
        <div className={startSmallImagesContainer}>
          <img src={depositeBonusImage} alt="deposite bonus image"></img>
          <img src={dedicatedManagerImage} alt="dedicated manager image"></img>
        </div>
      </section>
      {/* derivates section */}
      <section className={derivatesContainer}>
        <h1>
          Derivates made simple <br />
          in <b>3 Easy</b> steps.
        </h1>
        <div className={derivatesUserGuideContainer}>
          <div className={guideBox}>
            <div className={iphone14ImgContainer}>
              <img src={iphone14blackMockup} />
            </div>
            <div className={guideInfoContainer}>
              <img src={userIconImage} />
              <h2>Create an Account</h2>
              <h5>
                Register and complete your <br />
                Verification in less than 2 minutes
              </h5>
              <button>trade now</button>
            </div>
          </div>
          <div className={guideBox}>
            <div className={iphone14ImgContainer}>
              <img src={iphone14blackMockup2} />
            </div>
            <div className={guideInfoContainer}>
              <img src={oneRupeeImage} />
              <h2>Deposit Funds</h2>
              <h5>
                Add funds quicklyusing a variety <br />
                of payment methods
              </h5>
              <button>trade now</button>
            </div>
          </div>
          <div className={guideBox}>
            <div className={iphone14ImgContainer}>
              <img src={iphone14blackMockup3} />
            </div>
            <div className={guideInfoContainer}>
              <img src={arrowUpImage} />
              <h2>Become a Trader</h2>
              <h5>
                Choose Your Trading Pair & Trade <br />
                Seamlessly
              </h5>
              <button>trade now</button>
            </div>
          </div>
        </div>
        {/* backed by the best container */}
        <div className={backedByTheBestContainer}>
          <h1>Backed by the Best.</h1>
          <div>
            <img src={backedByTheBestImage} />
          </div>
        </div>
      </section>
    </>
  );
}
