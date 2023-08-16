import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import righttop from "../assets/images/b2.png";
import DataIntelImg from "../assets/images/dataintelligence.png";
import TechImg from "../assets/images/tech.png";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import MobileMock from "../components/lottiesItems/MobileMock";
import SourceImg from "../assets/images/sourcing.png";
import FinancingImg from "../assets/images/financing.png";
import TraceaImg from "../assets/images/tracea.png";
import Hiw1Img from "../assets/images/hiw_2.png";
import Hiw2Img from "../assets/images/hiw_2.png"
import Hiw3Img from "../assets/images/hiw_3.png"
import Hiw4Img from "../assets/images/hiw_4.png"
import Hiw5Img from "../assets/images/hiw_6.png"
import Hiw6Img from "../assets/images/hiw_6.png"
import Hiw7Img from "../assets/images/hiw_7.png"
import FoodchainTechnology from '../assets/images/foodchain_technology.png'
import HowItWorks from '../assets/images/how_it_works.png'
import Loader from "../components/lottiesItems/Loader";

const FoodTrading = [
  {
    title: "Connectivity",
    image: SourceImg,
    text: "Connect with the most reliable and safest network of Buyers and Suppliers that have passed strict verification processes",
  },
  {
    title: "Financing",
    image: FinancingImg,
    text: "Suppliers can access financing by tokenization of their products and using the smart contracts signed that are tied to the operation through milestones agreed by all parties",
  },
  {
    title: "Security",
    image: TraceaImg,
    text: "Smart contracts guarantees that all parties fulfill their obligations, or the flow of goods and money is stopped according to the milestones",
  },
];

const circles = [
  { id: 1, class: 'hiw_1', image: Hiw1Img, text: 'Verified suppliers sell their products through TRU MARKET in a global operation.' },
  { id: 2, class: 'hiw_2', image: Hiw2Img, text: 'Supplier and Importer sign a Smart Contract that specifies payment terms and milestones for every party.' },
  { id: 3, class: 'hiw_3', image: Hiw3Img, text: 'The importer funds the Smart Contract and the money will be locked until milestones are completed.' },
  { id: 4, class: 'hiw_4', image: Hiw4Img, text: 'The operation gets financed by crowd-investing through interested investors in return for interest.' },
  { id: 5, class: 'hiw_5', image: Hiw5Img, text: 'Money goes directly to the supplier according to the specified payment terms and goods are delivered.' },
  { id: 6, class: 'hiw_6', image: Hiw6Img, text: 'Funds are released as milestones are completed, Investors get paid with interest, the supplier is able to fulfill the business operation, and the importer gets the goods at the destination.' },
  { id: 7, class: 'hiw_7', image: Hiw7Img, text: 'A QR code with the story of the milestones of the operation is generated and shared between parties.' },
]

const Technology = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);
  const [selectedCircle, setSelectedCircle] = useState(1)

  useEffect(() => {
    Array.from(
      document.querySelectorAll('img[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
    Array.from(
      document.querySelectorAll('p[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  });
  useEffect(() => {
    onHandleClick("technology");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const getCircleText = (selectedID) => {
    const selected = circles.filter((item) => {
      return item.id == selectedID
    })

    return selected[0].text
  }

  return (
    <div className="home-main technology">
      <Loader loading={loading} />
      {/* <section className="trades-section">
        <div className="custom-container ">
          <div className="online-platform trades-section">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <div className="row g-0 justify-content-between align-items-center ">
                  <img className="bg-trades" src={TradesImg} />
                  <div className="col-12 col-lg-6">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-10">
                        <h2>We make global</h2>
                        <h2>trades happen.</h2>
                        <br />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="onlineplatform-section">
        <img className="right-top-img" src={righttop} />
        <div className="custom-container ">
          <div className="online-platform">
            <div className="row g-0 justify-content-center">
              <div className="col-12">
                <div className="row g-0 justify-content-between align-items-center">
                  <div className="col-5 d-none d-md-flex col-0">
                    {/* <img
                      className="mobile-platform"
                      src={MobilePlatform}
                    ></img> */}
                    <MobileMock />
                  </div>
                  <div className="col-12 col-lg-6 mt-4 m-md-0">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-10">
                        <h2>
                          TRU represents Trust, Traceability & Transparency.
                        </h2>
                        <br />
                        <p>
                          Thanks to the blockchain technology, TRU MARKET has
                          created a secure and transparent platform to trade and invest that reduces risk of fraud
                          by guaranteeing traceability in real time.
                          The technology streamlines the entire supply chain, reduces costs and creates trust for all involved parties.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourmission-section mt-4">
        <div className="custom-container">
          <h2 className="custom-h2">Our Mission</h2>
          <div className="row g-0 justify-content-between align-items-center">
            <div className="image-section col-12 col-md-8 col-lg-5">
              <div className="row g-0 flex-column justify-content-center align-items-center align-content-center">
                <img className="dataInt" src={DataIntelImg} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row g-0">
                <div className="col-12 col-xxl-10 col-xl-12 col-lg-12 col-md-12">
                  <h2>Traceability</h2>
                  <br />
                  <p>
                    Our mission is to enable end-to-end traceability in global supply chains using blockchain and
                    smart contracts, providing customers with a transparent view of the origin, journey, and
                    quality of the products they purchase, while creating opportunities for suppliers to
                    differentiate themselves through sustainable and ethical practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="network">
          <div className="custom-container">
            <div className="row g-0 justify-content-center">
              <div className="col-12">
                <div className="row g-0 justify-content-between align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-10 col-xl-12 col-lg-12 col-md-12">
                        <h2>Trust</h2>
                        <br />
                        <p>
                          Smart contracts increase trust by providing a secure and tamper-proof way to execute agreements between parties.
                          Once the terms of the contract are defined and agreed upon, they are encoded into a blockchain network, which allows for automated execution of the contract terms.
                          All payments are kept and secured in an Escrow account and gets released according to their digital agreement when milestones are completed and verified.
                          As a result, smart contracts have the potential to greatly increase the efficiency and security of a wide range of operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-0 justify-content-between justify-content-end align-items-center mt-5">
                  <div className="col-12 offset-0 offset-lg-6 col-lg-6">
                    <div className="row g-0">
                      <div className="col-12 col-xxl-10 col-xl-12 col-lg-12 col-md-12">
                        <h2>Transparency</h2>
                        <br />
                        <p>
                          Every operation goes through an on-site inspection. The monitoring of the entire processes
                          and the quality control of the product happens in real-time and is shared between all the
                          players and accessible via any device.
                        </p>
                        <p>
                          Moreover, the final consumer can consult all the public data by scanning the smart label
                          placed on the packaging and get to know the true story behind the product that they are
                          purchasing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="onlineplatform-section">
        <div className="custom-container values-section">
          {/* <div className="row g-0 justify-content-center align-items-center">
            <div className="col-10">
              <div className="row g-0 justify-content-center align-items-center values">
                <div className="col-12 col-xxl-8 col-xl-10 col-lg-10 col-md-10">
                  <div className="row g-0 justify-content-center ">
                    <div className="col-12">
                      <h2>Values</h2>
                      <br />
                      <div className="solution-image-container d-flex justify-content-center">
                        <div className="vso-img">
                          <img className="importer-img" src={TraceabilityImg} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"></img>
                          <img className="producer-img" src={TrustImg} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s" ></img>
                          <img className="consumer-img" src={TransparencyImg} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"></img>
                        </div>
                      </div>

                      <div className='btn-main d-flex justify-content-center align-items-center'>
                        <Button
                          className="border-gradient-green"
                          text={"Invest Now"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row g-0 justify-content-center align-items-center foodchain">
            <div className="col-10">
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12 col-xxl-12 col-xl-10 col-lg-12 col-md-12">
                  <div className="row g-0 justify-content-center">
                    <div className="col-12 col-xxl-10 col-xl-10 col-lg-12 col-md-10">
                      <div className="foodchain-technology-container">
                        <div className="heading-section">
                          <h2 className="foodchain-technology-text">FOODCHAIN TECHNOLOGY</h2>
                          <p>TRU MARKET ensures that the goods get delivered at the best quality and on time.</p>
                        </div>

                        <div className="foodchain-image-container">
                          <img src={FoodchainTechnology} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row g-0 justify-content-center mt-5 mb-5">
                    <div className="col-12 col-xxl-10 col-xl-10 col-lg-12 col-md-10">
                      <div className="btn-main d-flex flex-column justify-content-center align-items-center align-content-center">
                        <h2>
                          We are revolutionizing the way to conduct global trade with smart contract technology
                        </h2>
                        <br />
                        <br />
                        <div className="row justify-content-around">
                          {FoodTrading.map((val, ind) => (
                            <div className="col-12 col-md-6 col-lg-3">
                              <div class="card border-0 justify-content-center align-items-center">
                                <img
                                  src={val.image}
                                  class="food-trade-img"
                                  alt="..."
                                />
                                <div class="card-body">
                                  <h5 class="card-title text-center">
                                    {val.title}
                                  </h5>
                                  <p class="card-text text-center">
                                    {val.text}
                                  </p>
                                </div>
                              </div>
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
      </section>
      <section>
        <div className="how-it-works-container">
          <div className="heading-section">
            <h2 className="how-it-works-text">HOW IT WORKS</h2>
            <p style={{width: '80%'}} >TRU MARKET has revolutionized the way to conduct global trade streamlining the process for all players and reducing risks’</p>
          </div>

          <div className="how-it-works-image-container">
            <img src={HowItWorks} />

            <p className="hiw_text">{getCircleText(selectedCircle)}</p>

            {circles.map((item) => {
              return <div className={item.class} onClick={() => setSelectedCircle(item.id)} style={{ border: selectedCircle == item.id ? '3px solid #B1DA50' : '3px solid #EEF0E7', background: selectedCircle == item.id ? '#B1DA50' : '#fff' }}><img src={item.image} /></div>
            })}
          </div>
        </div>
      </section>
      <section className="onlineplatform-section">
        <div className="custom-container values-section">
          <div className="row g-0 justify-content-center align-items-center foodchain">
            <div className="col-10">
              <div className="row g-0 justify-content-center align-items-center">
                <div className="col-12 col-xxl-12 col-xl-10 col-lg-12 col-md-12">
                  <div className="row g-0 justify-content-center mt-5 mb-5">
                    <div className="col-12 col-xxl-8 col-xl-10 col-lg-12 col-md-10">
                      <div className="btn-main d-flex flex-column justify-content-center align-items-center align-content-center">
                        <h2>
                          We created the safest ecosystem to help companies do global business with the most reliable global buyers and suppliers
                        </h2>
                        <br />
                        <p>
                          Our platform is built on cutting-edge blockchain technology, which provides traceability,
                          transparency, and trust to the entire supply chain. With TRU MARKET, you can be sure that
                          the fruit you receive is of the highest quality and has been sourced ethically and sustainably.
                        </p>
                        <br />
                        <Link to={"/investor"}>
                          <Button
                            className={"border-gradient-green"}
                            text={"Invest Now"}
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
      </section>
    </div>
  );
};

export default Technology;
