import React from "react";
import {
  usersReviewContainer,
  usersImageContainer,
  earnMoneyContainer,
  earnMoneyImagesContainer,
  startEarningBtn,
  backgroundImage,
  tradeTogatherContainer,
  textContent,
  tradeNumbersContainer,
    box,
  joinCommunityBtn,
  visionariesContainer,
  visionariesImageContainer,
  getStartedContainer,
  bigPhone,
  startTradingBtnBig,
  getStartedText,
  brandLogo,
  bottomFooter,
  tempContent,
  socialIcons,
} from "../styles/footer.module.css";
import arjunNaikImage from "../assets/arjun_naik.png";
import prakashJamatiaImage from "../assets/prakash_jamatia.png";
import sambhaviNayakImage from "../assets/sambhavi_nayak.png";
import shareLinkImage from "../assets/share_link_image.png";
import inviteFriendsImage from "../assets/invite-friends_image.png";
import tradeAndEarnImage from "../assets/trade_and_earn_image.png";
import professionalLaptopImage from "../assets/professional_laptop.jpg";

import visionarie1 from "../assets/visionarie1.png";
import visionarie2 from "../assets/visionarie2.png";
import visionarie3 from "../assets/visionarie3.png";
import getStartedTextImage from "../assets/Get started now..png";
import bigPhoneDensity from "../assets/big_phone_density.png";
import brandLogoWhite from "../assets/density_white_logo.png";
import fbLogo from "../assets/social/facebook logo.png";
import linkedInLogo from "../assets/social/linkedin logo.png";
import twitterLogo from "../assets/social/Twitter logo.png";
import instaLogo from "../assets/social/instagram logo.png";

export function Footer() {
  return (
    <>
      <section className={usersReviewContainer}>
        <h1>Don't take our word for it.</h1>
        <h5>
          Hear it from our Expert community of traders who have made
          <br /> &nbsp; &nbsp; &nbsp; insane amounts in a short amount of time
        </h5>
        <div className={usersImageContainer}>
          <img src={prakashJamatiaImage} />
          <img src={sambhaviNayakImage} />
          <img src={arjunNaikImage} />
        </div>
      </section>
      {/* earn money the easy way section */}
      <section className={earnMoneyContainer}>
        <h1>
          Earn money. <b>the easy way.</b>
        </h1>
        <h4>No complexity of Trading Fee, generate volume and win</h4>
        <div className={earnMoneyImagesContainer}>
          <img src={shareLinkImage} />
          <img src={inviteFriendsImage} />
          <img src={tradeAndEarnImage} />
        </div>
        <button className={startEarningBtn}>start earning today</button>
      </section>
      {/* trade togather section */}
      <section className={tradeTogatherContainer}>
        <img className={backgroundImage} />
        <div className={textContent}>
          <h1>
            Trade Togather. <b>Thrive Togather</b>
          </h1>
          <h5>join the fun-filled community on our platform.</h5>

          <div className={tradeNumbersContainer}>
            <div className={box}>
              <h1>10,000+</h1>
              <h5>Traders</h5>
            </div>
            <div className={box}>
              <h1>100Mn</h1>
              <h5>Daily Volume Trade</h5>
            </div>
            <div className={box}>
              <h1>Daily</h1>
              <h5>Trade Analysis</h5>
            </div>
            <div className={box}>
              <h1>Live</h1>
              <h5>Signals</h5>
            </div>
          </div>
          <button className={joinCommunityBtn}>join community</button>
        </div>
      </section>
      {/* meet the visionaries section */}
      <section className={visionariesContainer}>
        <h1>
          Meet the <b>Visionaries</b> <br />
          behind Density.
        </h1>
        <div className={visionariesImageContainer}>
          <img src={visionarie1} />
          <img src={visionarie2} />
          <img src={visionarie3} />
        </div>
      </section>
      {/* get started section */}
      <section className={getStartedContainer}>
        <img src={getStartedTextImage} className={getStartedText} />
        <img src={bigPhoneDensity} className={bigPhone} />
        <button className={startTradingBtnBig}>Start Trading </button>
      </section>
      {/* bottom footr section */}
      <section className={bottomFooter}>
        <div className={brandLogo}>
          <img src={brandLogoWhite} />
        </div>
        <div>
          <ul>
            <li>blogs</li>
            <li>fees</li>
            <li>leaderboard</li>
            <li>careers</li>
            <li>contact us</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className={tempContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit
          velit, egestas eget diam eget, ultricies rhoncus leo. Nullam euismod
          quam eu eros semper, ac iaculis quam vehicula. Sed non enim a felis
          scelerisque faucibus. Nullam et augue sed quam semper ultrices. Sed
          semper enim et eros laoreet, eget semper quam semper.
        </div>
        <div className={socialIcons}>
          <img src={fbLogo} />
          <img src={twitterLogo} />
          <img src={linkedInLogo} />
          <img src={instaLogo} />
        </div>
      </section>
    </>
  );
}
