import React, { useEffect, useState } from "react";
import HowItWorksImage from "../assets/images/howitworks.png";
import InvestNowImage from "../assets/images/interested_to_invest_correct.png";
import { CountUp } from "use-count-up";
import Supplier from "../components/Supplier";
import Sticky2 from "../components/GsapContainer";
import Loader from "../components/lottiesItems/Loader";

const HighlightsData = [
  {
    title: "Years in Business",
    counts: 1,
  },
  {
    title: "Total investment",
    counts: 100,
  },
  {
    title: "Countries of Operation",
    counts: 4,
  },
  {
    title: "Total Products",
    counts: 3,
  },
];

const Investor = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onHandleClick("investor");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="whoweare-main">
      <Loader loading={loading} />
      <section className="whoweare-section">
        <div className="custom-container mb-0 mb-lg-5 ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-12">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-lg-9 col-xl-8 col-xxl-12">
                    <div className="row g-0">
                      <div className="col-12 ">
                        <h6 className="text-center">MISSION & VISION</h6>
                        <h2 className="text-center">
                          Creating the most transparent network of fruit trading
                        </h2>
                        <p className="text-center">
                          TRU MARKET is creating value-added products with
                          blockchain traceability so that consumers can
                          understand and appreciate the journey of food
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-0 pt-lg-5">
          <Sticky2 />
        </div>
        <div className="custom-container ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-12">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-lg-10 col-xl-8 col-xxl-12">
                    <div className="row g-0">
                      <div className="col-12 ">
                        <h2 className="text-center">Highlights</h2>
                        <p className="text-center">
                          TRU MARKET is a fast-growing company that is making
                          global trades possible. Currently, we are growing at a
                          rate of 45% visitors YoY reaching 100,000+ active
                          visitors.
                        </p>
                        <div className="row g-0 mt-4">
                          {HighlightsData.map((val, ind) => (
                            <div className="col-6 col-lg-3">
                              <p className="text-center text-black">
                                {val.title}
                              </p>
                              <h2 className="text-center text-black">
                                {ind === 1 && "$"}{" "}
                                <CountUp
                                  isCounting
                                  duration={5}
                                  end={val.counts}
                                />
                                {ind === 1 && "K"}
                              </h2>
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
        <div className="custom-container ">
          <div className="online-platform overview-main">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12 col-lg-12 col-xxl-12">
                    <div className="row g-0 mb-4">
                      <div className="col-12 col-xxl-12 ">
                        <h2 className="text-center">Steps of Our Journey</h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-12">
                        <ul class="timeline-list">
                          <li className="justify-content-end">
                            <div class="timeline_content">
                              <span>June 2021</span>
                              <p>Foundation of TRU MARKET BLOCKCHAIN S.A.C</p>
                            </div>
                          </li>
                          <li>
                            <div class="timeline_content">
                              <span>October 2021</span>
                              <p>
                                Participated in Universidad del Pacífico
                                Ventures
                              </p>
                            </div>
                          </li>
                          <li className="justify-content-end">
                            <div class="timeline_content">
                              <span>December 2021</span>
                              <p>
                                Validated the idea with 10+ exporters over the
                                world
                              </p>
                            </div>
                          </li>
                          <li>
                            <div class="timeline_content">
                              <span>March 2022</span>
                              <p>Raised 30K in capital</p>
                            </div>
                          </li>
                          <li className="justify-content-end">
                            <div class="timeline_content">
                              <span>June 2022</span>
                              <p>MVP TRU MARKET is launched to be tested</p>
                            </div>
                          </li>
                          <li>
                            <div class="timeline_content">
                              <span>July 2022</span>
                              <p>We hired our own lead designer team</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container solution">
          <div className="row g-0 justify-content-center align-items-center">
            <div className="col-12">
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12">
                  <div className="row g-0 justify-content-center">
                    <div className="col-12">
                      <h2>How it works?</h2>
                      <p className="text-center">
                        The first crowdfunding platform with Smart Contracts
                        empowering the agroindustrial network
                      </p>
                      <br />
                      <div className="solution-image-container d-flex justify-content-center">
                        <div className="">
                          <img src={HowItWorksImage} className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invest-now">
          <div className="invest-image-container">
            <h1 className="interested-heading">INTERESTED TO<br />INVEST?</h1>
            <img src={InvestNowImage} />
          </div>
          <div className="invest-form-container">
            <form className="invest-form-new">
              <input className="form-field" type="text" placeholder="Name *" required /><br />
              <input className="form-field" type="text" placeholder="Country *" required /><br />
              <input className="form-field" type="text" placeholder="Phone *" required /><br />
              <input className="form-field" type="email" placeholder="Email *" required /><br />
              <input className="form-field" type="text" placeholder="Company *" required /><br />
              <textarea style={{ resize: 'none' }} className="form-field" rows={5} placeholder="Message" /><br />
              <div style={{ display: 'flex' }}>
                <div style={{ width: '70%' }} />
                <div style={{ width: '30%' }}>
                  <input type="submit" className="form-button" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <Supplier />
      </section>
    </div>
  );
};

export default Investor;
