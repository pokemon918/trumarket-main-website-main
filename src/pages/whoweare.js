import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import bottomleft from "../assets/images/b1.png";
import OurMissionImg from "../assets/images/ourmission.jpg";
import PassionImg from "../assets/images/passion.png";
import MobileMock from "../components/lottiesItems/MobileMock";
import WhoweareBanner from "../assets/images/banner1.jpg";
import TechBg from "../assets/images/closer-tech-bg.png";
import ContactBg from "../assets/images/closer-contactus-bg.png";
import flag from "../assets/images/flag.png";
import Loader from "../components/lottiesItems/Loader";
import { Link } from "react-router-dom";

const Whoweare = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onHandleClick("whoweare");
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
  return (
    <div className="whoweare-main">
      <Loader loading={loading} />
      <section className="whoweare-section">
        <img className="left-bottom-img" src={bottomleft} />
        <div className="custom-container ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="row g-0">
                      <div className="col-10 col-xxl-8 col-xl-10 col-lg-10 col-md-10">
                        <h2>
                          TRU MARKET is your partner for sourcing from the best
                          within the food industry
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-flex col-0 col-md-6 col-xxl-5">
                    {/* <img
                      className="mobile-platform"
                      src={MobilePlatform}
                      height={500}
                    ></img> */}
                    <MobileMock />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="d-none d-md-flex col-0 col-md-6">
                    <img
                      className="mobile-platform"
                      src={PassionImg}
                      // height={500}
                      style={{ width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-md-6 col-xxl-6">
                    <div className="row g-0">
                      <div className="col-10 col-xxl-12 ">
                        <h6>OUR PASSION</h6>
                        <h2>
                          We are your perfect partner for sourcing from the
                          best.
                        </h2>
                        <p>
                          TRU MARKET means three terms, "Trust", "Traceability"
                          and "Transparency," which we believe encapsulates our
                          aim of creating value-added value chains using
                          blockchain to facilitate global trade. These three
                          pillars describe and sustain us as a distinct brand
                          and an innovator in the industry that the world has
                          started to witness. We work to bring the consumers
                          closer to the source and get to know the uniqueness of
                          every product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-12">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-lg-12 col-xxl-12">
                    <div className="row g-0">
                      <div className="col-12 ">
                        <h6 className="text-center">ONLINE PLATFORM</h6>
                        <h2 className="text-center">
                          We operate an online platform providing solutions to
                          help buyers connect with the most reliable global and
                          agricultural suppliers.
                        </h2>
                        <p className="text-center">
                          We strive to build a global network of trusted
                          businesses and professionals that ultimately form a
                          healthy ecosystem where international trade thrives
                          and companies work together efficiently. We possess
                          rigorous processes to make sure that growers, buyers,
                          industry experts, community members, our employees, or
                          any parties involved are trustworthy, capable, and
                          reliable. This helps us grow and nurture a safe
                          ecosystem where traceability and reliable business
                          transactions can take place.
                        </p>
                      </div>
                    </div>
                    <div className="row generate-smart">
                      <div className="col-12 col-sm-3 col-md-4 col-lg-3 ">
                        <div className="card">
                          <div className="img-div">
                            <img
                              src={WhoweareBanner}
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">Fresh Blueberries</h5>
                            <p className="card-text text-black">Peru</p>
                            <h5 className="card-title">USD 11.00</h5>
                            <p className="card-text">per 1.5kg clamshell</p>
                            <p className="card-text">Available Specs:</p>
                            <p className="card-text">
                              <strong className="text-black">
                                Sizes 16mm+, 1.5kg carton, 10kg bulk…
                              </strong>
                            </p>
                            <Link to="" className="card-link">
                              See Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-9 col-md-8 col-lg-9 mt-4 mt-md-0">
                        <div className="card smart-card">
                          <div className="card-header">
                            <h1 className="card-title">
                              Generate Smart Contract
                            </h1>
                            <i className="fa fa-close"></i>
                          </div>
                          <div className="card-body">
                            <div className="row mt-3 flex-column-reverse flex-sm-row">
                              <div className="col-10 col-sm-7 col-md-7">
                                <p className="card-label ">Selected Product</p>
                                <div className="select-section">
                                  <h5 className="card-title">
                                    Fresh Blueberries
                                  </h5>
                                  <div className="d-flex align-items-center">
                                    <p className="card-text text-black  me-2 mb-0">
                                      Peru
                                    </p>{" "}
                                    <img src={flag} width={15} />
                                  </div>
                                </div>
                                <p className="card-label mt-3">
                                  Contact Information
                                </p>
                                <div className="select-section rounded-bottom border-bottom-0 b-bottom-right-radius b-bottom-left-radius">
                                  <h5 className="card-title">Dirk Howard</h5>
                                  <p className="card-text">
                                    <strong className="text-black">
                                      FreshBlue Fruit Import - Netherlands
                                    </strong>
                                  </p>
                                  <p className="card-text">
                                    dirk.howard@freshblue.com
                                  </p>
                                  <p className="card-text">+31 6 54773828</p>
                                </div>
                                <div className="select-section rounded-top pt-1 pb-1 b-top-right-radius b-top-left-radius">
                                  <Link to="" className="card-link">
                                    Change
                                  </Link>
                                </div>
                                <p className="card-label mt-3">
                                  Destination Country
                                </p>
                                <div className="select-section border-0 pt-1 pb-1 ">
                                  <p className="card-text">Select Country</p>
                                </div>
                                <button className="smart-btn">Submit</button>
                              </div>
                              <div className="col-10 col-sm-5 col-md-5">
                                <div className="smart-right-section">
                                  <p className="card-text question">
                                    Why work with TRU MARKET?
                                  </p>
                                  <div className="mt-4">
                                    {[
                                      "Secured transaction",
                                      "Verified supplier",
                                      "Transparent quality",
                                      "Real-time tracking",
                                      "Various origins and specifications",
                                    ].map((val, ind) => (
                                      <div key={ind} className="d-flex ">
                                        <i className="fa fa-check-circle me-2 text-primary"></i>
                                        <p className="card-text text-black">
                                          {val}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-12">
                <div className="row g-0 justify-content-between align-items-center">
                  <div
                    className="col-12 col-md-5 bg-light-green mb-5"
                    style={{ height: 400 }}
                  >
                    <img
                      src={OurMissionImg}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-5 mb-lg-0">
                    <div className="row g-0">
                      <div className="col-10 col-xxl-8 col-xl-10 col-lg-10 col-md-10">
                        <h2>Our Mission</h2>
                        <br />
                        <p>
                          Our mission is to help local producers connect with
                          global buyers, through a blockchain-based platform
                          that ensures transparency and trust on the value chain
                          from farm to table
                        </p>
                        <Button
                          className={"border-gradient-green"}
                          text={"Learn More"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container ">
          <div className="online-platform overview-main">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-lg-12 col-xxl-12">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-12 ">
                        <h6 className="text-center">TRU MARKET OVERVIEW</h6>
                        <h2 className="text-center">
                          Get started with our solutions
                        </h2>
                      </div>
                    </div>
                    <div className="row g-0 justify-content-center mt-4">
                      <div className="col-12 col-xxl-12">
                        <div className="row g-0 justify-content-between align-items-center">
                          <div className="col-12 col-md-6 col-xxl-5">
                            <div className="row g-0 justify-content-evenly">
                              <div className="col-12 col-xxl-12 col-xl-10 col-lg-10 col-md-10 overview-card">
                                <h6>TRU MARKET Fulfillment</h6>
                                <p>
                                  TRU MARKET Fulfillment is the solution where
                                  growers and importers can create Smart
                                  Contracts to safely source products while we
                                  take care of everything to get them delivered.
                                </p>
                                <Link to={"/technology"}>
                                  <Button
                                    className={"border-gradient-green"}
                                    text={"Learn More"}
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xxl-5 mt-4 mt-md-0">
                            <div className="row g-0 justify-content-evenly">
                              <div className="col-12 col-xxl-12 col-xl-10 col-lg-10 col-md-10 overview-card">
                                <h6>Investing opportunities</h6>
                                <p>
                                  TRU MARKET offers investment opportunities to
                                  anyone who wants to participate in global
                                  trade operations of food and agriculture. We
                                  are also looking for investors interested in
                                  funding the platform.
                                </p>
                                <Link to={"/investor"}>
                                  <Button
                                    className={"border-gradient-green"}
                                    text={"Learn More"}
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container ">
          <div className="online-platform overview-main">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-lg-12 col-xxl-12">
                    <div className="row g-0">
                      <div className="col-12 ">
                        <h2 className="text-center">Take a closer look</h2>
                      </div>
                    </div>
                    <div className="row g-0 justify-content-center">
                      <div className="col-12">
                        <div className="row g-0 justify-content-between align-items-center">
                          <div className="col-12 col-md-5 col-lg-6">
                            <div className="row g-0 justify-content-evenly">
                              <Link
                                className="text-decoration-none"
                                to={"/technology"}
                              >
                                <div
                                  className="text-decoration-none col-10 col-xxl-10 col-xl-10 col-lg-10 col-md-10 closer-card d-flex justify-content-center align-items-center"
                                  style={{ backgroundImage: `url(${TechBg})` }}
                                >
                                  <p className="text-decoration-none">
                                    Technology
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-12 col-md-5 col-lg-6">
                            <div className="row g-0">
                              <Link
                                className="text-decoration-none"
                                to={"/contactus"}
                              >
                                <div
                                  className="col-10 col-xxl-10 col-xl-10 col-lg-10 col-md-10 closer-card d-flex justify-content-center align-items-center"
                                  style={{
                                    backgroundImage: `url(${ContactBg})`,
                                  }}
                                >
                                  <p className="">Contact Us</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoweare;
