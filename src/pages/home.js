import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import righttop from "../assets/images/b2.png";
import lefttop from "../assets/images/b3.png";
import bottomleft from "../assets/images/b1.png";
import ConsumerImg from "../assets/images/CONSUMERS.png";
import InvestorsImg from "../assets/images/INVESTORS.png";
import ImporterImg from "../assets/images/Importers.png";
import ProducerImg from "../assets/images/Producers.png";
import TruMarket from '../assets/images/tru_market_design.png'
import OurFriends from "../components/OurFriends";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Timeline from "../components/lottiesItems/Timeline";
import MobileMock from "../components/lottiesItems/MobileMock";
import Loader from "../components/lottiesItems/Loader";

const Home = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);
  const [selectedCircle, setSelectedCircle] = useState(-1)

  const circles = [
    { id: 1, class: 'producers', name: 'EXPORTERS', image: ProducerImg, text: 'Exporters gain access to a global network of buyers and financing through smart contracts. By offering real-time traceability added value is created, which helps to reduce risk and build trust between exporters and buyers. Exporters can finance their global operations through smart contracts linked to the successful fulfillment of key milestones. Tru Market streamlines the export process makes it easier and more profitable for exporters to conduct business globally.' },
    { id: 2, class: 'importers', name: 'IMPORTERS', image: ImporterImg, text: 'Importers use Tru Market to source products and connect with verified suppliers, communicate directly with exporters, negotiate prices, place orders, and make secure payments. Importers can track the status of their orders and access real-time tracking of the value chain. The technology ensures the authenticity and traceability of the products being traded, providing importers with greater transparency and confidence in their purchases. Overall, Tru Market streamlines the importing process, saves time and money, and minimizes the risk of fraud and error.' },
    { id: 3, class: 'consumers', name: 'CONSUMERS', image: ConsumerImg, text: 'End-customers use Tru Market to gain real knowledge about the products they are purchasing in the palm of their hand. A QR code allows them to view the full and immutable story of a product to learn about the journey throughout its supply chain.' },
    { id: 4, class: 'investors', name: 'INVESTORS', image: InvestorsImg, text: 'Investors use Tru Market to gain access to a new and innovative investment opportunity in the global trade industry. By investing in specific trade transactions, investors can potentially earn higher returns than traditional investments. The technology provides a secure and transparent platform for investors to track their investments and ensure the integrity of the trade transactions. Investors also benefit from the diversification of their investment portfolio, as Tru Market offers access to a variety of trade transactions across different industries and regions. Overall, Tru Market provides a unique and promising opportunity for investors to participate in global trade and earn attractive returns while minimizing risks.' },
  ]

  useEffect(() => {
    Array.from(
      document.querySelectorAll('img[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  });
  useEffect(() => {
    onHandleClick("home");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Loader loading={loading} />
      <div className="home-main">
        <section className="experience-section ">
          <div className="custom-container">
            <div className="row g-0 justify-content-center align-items-center">
              <div className="col-12 col-md-6 col-xxl-6">
                <div className="row g-0">
                  <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-11">
                    <h2>Experience</h2>
                    <h2>Global Trade</h2>
                    <h2>Like Never Before</h2>
                    <br />
                    <p>
                      Our mission is to revolutionize global trade by empowering growers and buyers with smart,
                      secure and efficiente trade solutions. Our blockchain-powered marketplace provides real-time
                      traceability and financing, simplifying supply chains and reducing risk for all parties.
                    </p>
                    <br />
                    <Link to={"/technology"}>
                      <Button
                        className={"border-gradient-green white-bg"}
                        text={"Technology"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image-section d-none d-md-flex col-0 col-md-6 col-xxl-5">
                <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                  {/* <img src={TimelineImg} /> */}
                  <Timeline />
                  {/* {expData.map((val, ind) => (
                    <div
                      className={`image-container ${ind % 2 === 0 ? "left-radius" : "right-radius"
                        }`}
                    >
                      <div className={`border-white-img ${ind % 2 === 0 ? "left-radius" : "right-radius"
                        }`}>
                        <div className="bg-white-img"></div>
                      </div>
                      <img src={val.image} />
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="onlineplatform-section">
          <img className="right-top-img" src={righttop} />
          <img className="left-top-img" src={lefttop} />
          <img className="left-bottom-img" src={bottomleft} />
          <div className="custom-container ">
            <div className="online-platform">
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-xxl-6">
                  <div className="row g-0">
                    <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-12">
                      <h2>An innovative marketplace</h2>
                      <br />
                      <p>
                        <b>
                          We provide a unique platform for growers and buyers to engage in the most secure
                          and trasparent transactions, access to financing for their operations, and benefit
                          from real-time traceability and information.
                        </b>
                      </p>
                      <br />
                      <p>
                        The platform tracks the orders in real-time and provides access to detailed information about critical milestones of every export operation.
                        Parties can access to financing through smart contracts linked to the successful fulfillment of this key milestones.
                        This direct connectivity between exporters and buyers ensures transparency, which helps to build trust among all players and strengthens business relationships.
                      </p>
                      <Link to={"/whoweare"}>
                        <Button
                          className={"border-gradient-green"}
                          text={"Learn More"}
                        />
                      </Link>
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
          <div className="custom-container solution">
            <div className="row g-0 justify-content-center align-items-center">
              <div className="col-12 col-xl-11">
                <div className="every-party-main-container">
                  <div className="every-party-section">
                    <h2 className="every-solution-text">Solution For Every Party</h2>
                    <p>A better, faster and more secure environment that increases value for all actors.</p>
                    <div className="holding-container">
                      <img src={TruMarket} style={{ width: '100%', objectFit: 'contain' }} />
                      {circles.map((item) => {
                        return <div className={item.class} onClick={() => setSelectedCircle(item.id)}
                          style={{ border: selectedCircle == item.id ? '7px solid #B1DA50' : '3px solid #EEF0E7' }}>
                          <img src={item.image} /><br />{item.name}</div>
                      })}
                    </div>
                  </div>

                  <div className="every-party-content-container">
                    {circles.map((item) => {
                      return <div className="content-box" style={{ border: selectedCircle == item.id ? '1px solid #B1DA50' : '1px solid #EEF0E7', background: selectedCircle == item.id ? 'rgba(177, 218, 80, 0.1)' : '#fff' }}>
                        <div style={{ cursor: 'pointer' }} onClick={() => { if (item.id == selectedCircle) { setSelectedCircle(-1) } else { setSelectedCircle(item.id) } }} className="heading-container">
                          <div className="icon-container">
                            {item.id == selectedCircle ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>}
                          </div>
                          <div className="heading-text-container">
                            <font style={{ color: selectedCircle == item.id ? '#B1DA50' : '#000' }}>{item.name}</font>
                          </div>
                        </div>

                        {item.id == selectedCircle && <div className="content-container">
                          <p>{item.text}</p>
                        </div>}
                      </div>
                    })}
                  </div>
                </div>
                <div className="btn-main d-flex justify-content-center align-items-center">
                  <Link to={"investor"}>
                    <Button
                      className="border-gradient-green"
                      text={"Invest Now"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-container our-friends">
            <div className="row g-0  justify-content-center align-items-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-center align-items-center">
                  <div className="col-12">
                    <div className="row g-0 justify-content-center">
                      <div className="col-12">
                        <OurFriends />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
