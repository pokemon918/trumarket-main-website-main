import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

import BannerVideo from "../../assets/videos/Reel Superfoods Perú.mp4";
import TechBanner from "../../assets/images/technologybanner.png";
import WhoweareBanner from "../../assets/images/techbanner.png";
import ContactUsBanner from "../../assets/images/contactus-bg.png";
// import ContactUsBanner from "../../assets/images/contactus.png";
import InvertorBanner from "../../assets/images/investorbanner.png";

const Banner = ({ selectedBanner }) => {
  var dataText = ["Trust", "Transparency", "Traceability"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      if (document.querySelector(".banner-h1")) {
        document.querySelector(".banner-h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    try {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 5000);
      }
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function () {
          StartTextAnimation(i + 1);
        });
      }
    } catch (error) {}
  }

  useEffect(() => {
    StartTextAnimation(0);
  }, [selectedBanner === 'home'])
  // array with texts to type in typewriter

  switch (selectedBanner) {
    case "investor":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={InvertorBanner} />
            <div class="overlay"></div>
            <section class="banner-main ml3">
              <h2>Investors</h2>
            </section>
          </div>
        </>
      );
    case "whoweare":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={WhoweareBanner} />
            <div class="overlay"></div>
            <section class="banner-main ml3">
              <h2>Who we are?</h2>
            </section>
          </div>
        </>
      );
    case "technology":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={TechBanner} />
            <div class="overlay"></div>
            <section class="banner-main ml3">
              <h2>Technology</h2>
            </section>
          </div>
        </>
      );
    case "contactus":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={ContactUsBanner} />
            <div class="overlay"></div>
            <section class="banner-main ml3">
              <h2>Contact Us</h2>
            </section>
          </div>
        </>
      );
    case "privacy-policy":
      return (
        <>
          <div class="bg-image-wrap">
            <img src={WhoweareBanner} />
            <div class="overlay"></div>
            <section class="banner-main ml3">
              <h2>Privacy Policy</h2>
            </section>
          </div>
        </>
      );
    case "terms-conditions":
        return (
          <>
            <div class="bg-image-wrap">
              <img src={WhoweareBanner} />
              <div class="overlay"></div>
              <section class="banner-main ml3">
                <h2>Terms & Conditions</h2>
              </section>
            </div>
          </>
        );
    default:
      return (
        <>
          <div class="bg-video-wrap">
            {/* <video src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" loop muted autoplay>
            </video> */}
            <video className="video" autoPlay muted loop>
              <source src={BannerVideo} title={BannerVideo} type="video/mp4" />
            </video>
            {/* <iframe src="https://www.youtube.com/embed/OlRZkTWzZok?autohide=1&fs=0&showinfo=0&modestBranding=1&start=0&rel=0&disablekb=1&iv_load_policy=3&wmode=transparent&enablejsapi=1&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=OlRZkTWzZok&widgetid=1"
              frameBorder="0"
              allowFullScreen
            ></iframe> */}
            <div class="overlay"></div>
            <section class="banner-main ml3">
              <h2>With Tru Market, Experience</h2>
              <h1 className="banner-h1" >
                <span></span>
              </h1>
              <br className="d-none d-md-block" />
              <Link to="investor">
                <Button
                  className="border-gradient-green filter-drop-shadow color-white me-0"
                  text={"Join the Market"}
                />
              </Link>
            </section>
          </div>
          {/* <div className="banner-main">

          </div> */}
        </>
      );
  }
};

export default Banner;
