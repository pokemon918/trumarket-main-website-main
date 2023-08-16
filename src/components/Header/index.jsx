import React, { useState } from "react";
import logo from "../../assets/images/Headerlogo.png";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Button from "../Button";

export const Header = ({ selectedBanner, onHandleClick }) => {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <div
        className={`${
          selectedBanner !== "home" ? "header-banner vh-50" : "header-banner"
        } `}
      >
        <div className="header p-0 p-lg-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setShow(!isShow)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse custom-nav ${
                isShow ? "show" : ""
              }`}
            >
              <div className="row g-0 justify-content-end w-100 h-100">
                <div className={`col-12 col-lg-10`}>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end align-items-center">
                    <li
                      className="nav-item"
                      onClick={() => {
                        onHandleClick("home");
                        setShow(!isShow);
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          selectedBanner === "home" ? "active" : ""
                        }`}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      class="nav-item"
                      onClick={() => {
                        onHandleClick("technology");
                        setShow(!isShow);
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          selectedBanner === "technology" ? "active" : ""
                        }`}
                        to="technology"
                      >
                        Technology
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        onHandleClick("whoweare");
                        setShow(!isShow);
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          selectedBanner === "whoweare" ? "active" : ""
                        }`}
                        to="whoweare"
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        onHandleClick("contactus");
                        setShow(!isShow);
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          selectedBanner === "contactus" ? "active" : ""
                        }`}
                        to="contactus"
                      >
                        Contact us
                      </Link>
                    </li>
                    <Link onClick={() => setShow(!isShow)} to="investor">
                      <Button
                        className="border-gradient-green ms-0 ms-lg-3"
                        text={"Invest now"}
                        
                      />
                    </Link>
                  </ul>
                </div>
                {/* <div className={`col-12 col-lg-2`}>
                  <a
                    className="text-decoration-none"
                    href="https://fulfillment.trumarket.tech/"
                  >
                    <div className="fullfilment d-flex justify-content-center align-items-center align-content-center">
                      Fulfillment
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
        <Banner selectedBanner={selectedBanner} />
      </div>
    </>
  );
};

export default Header;
