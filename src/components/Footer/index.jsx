import React from "react";
import FooterLogo from "../../assets/images/FooterLogo.png";
import Arrow from "../../assets/images/arrow.png";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-10">
              <div className="row  align-items-center">
                <div className="col-lg-3 col-md-6 footer-logo">
                  <img src={FooterLogo}></img>
                </div>
              </div>
              <div className="row  ">
                <div className="col-lg-4 col-md-6 footer-logo">
                  <div className="row g-0">
                    <div className="col-10 col-xl-8 col-lg-10 col-xxl-10 ">
                      <p>
                      OOur mission is to revolutionize global trade by empowering growers and buyers with smart, secure, and efficient trade solutions. Our blockchain-powered marketplace provides real-time traceability and financing, simplifying supply chains and reducing risk for all parties
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 footer-links">
                  <div className="row g-0">
                    <div className="col-6">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <Link to="privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="terms-and-conditions">Terms & Conditions</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li>
                          {" "}
                          <Link to="technology">Technology</Link>
                        </li>
                        {/* <li>
                          {" "}
                          <a className="text-decoration-none" href="https://fulfillment.trumarket.tech/">Fulfillment</a>
                        </li> */}
                        <li>
                          {" "}
                          <Link to="whoweare">Who we are</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 footer-links">
                  <h4>Apply Now</h4>
                  <form action="" method="post">
                    <div className="applynow">
                      <input placeholder="Email" type="email" name="email" />
                      <img src={Arrow} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
