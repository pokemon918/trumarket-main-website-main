import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import lefttop from "../assets/images/left-VSO.png";
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import { CountryList } from "../constants";
import Loader from "../components/lottiesItems/Loader";

const ContactUs = ({ onHandleClick }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onHandleClick("contactus");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="home-main contactus">
      <Loader loading={loading} />
      <section className="onlineplatform-section">
        <div className="contact-us-container">
          <div className="form-section">
            <h2 className="contact-us-text">CONTACT US</h2>
            <p>Our mission is to help local producers connect with global buyers, through a blockchain-based platform that ensures transparency and trust on the value chain from farm to table.</p>

            <a href="#"><img src={linkedin} /></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src={twitter} /></a>

            <form style={{ marginTop: '50px' }}>
              <input className="form-field" type="text" placeholder="Name" /><br />
              <input className="form-field" type="email" placeholder="Email" /><br />
              <input className="form-field" type="text" placeholder="Company Name" /><br />
              <select className="form-field" style={{ fontSize: '12px', fontWeight: 'bold', padding: '15px 6px' }} placeholder="Select Inquiry">
                <option value={""}>Select Inquiry</option>
                <option value={"investing"}>Investing</option>
                <option value={"career"}>Career</option>
                <option value={"sourcing"}>Sourcing</option>
                <option value={"sales"}>Sales</option>
              </select><br />
              <select className="form-field" style={{ fontSize: '12px', fontWeight: 'bold', padding: '15px 6px' }} placeholder="Select Country">
                <option value={""}>Select Country</option>
                {CountryList.map((val, ind) => (
                  <option value={val.code}>{val.name}</option>
                ))}
                <option value={"sales"}>Sales</option>
              </select><br />
              <textarea style={{ resize: 'none' }} className="form-field" rows={5} placeholder="Message" /><br />
              <input type="submit" className="form-button" value="Send" />
            </form>
          </div>

          <div className="map-container">
            <iframe
              className=""
              height={"100%"}
              width={"100%"}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Av.%20Alfredo%20Benavides%201944,%20Miraflores%2015074&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        {/* <img className="right-top-img" src={righttop} />
        <img className="left-top-img" src={lefttop} />
        <img className="left-bottom-img" src={bottomleft} />
        <div className="contactus">
          <div className="online-platform">
            <div className="row g-0 justify-content-center align-items-center">
              <div className="col-12 col-lg-6 info-details mb-4 mb-lg-0">
                <div className="row g-0">
                  <div className="col-11 col-xxl-10 col-xl-10 col-lg-10 col-md-10">
                    <h2>Please Get in touch!</h2>
                    <br />
                    <p>
                      Our mission is to help local producers connect with global
                      buyers, through a blockchain-based platform that ensures
                      transparency and trust on the value chain from farm to
                      table
                    </p>
                    <h3>
                      <span>
                        <i class="fa-solid fa-phone"></i>
                      </span>{" "}
                      +51 943 179 110
                    </h3>
                    <h3>
                      <span>
                        <i class="fa-solid fa-message"></i>
                      </span>{" "}
                      contact@trumarket.tech
                    </h3>
                    <div className="socail-icons">
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6  contactus-form">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <form>
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="Email" />
                      <input type="text" placeholder="Company Name" />
                      <select placeholder="Select Inquiry">
                        <option value={""}>Select Inquiry</option>
                        <option value={"investing"}>Investing</option>
                        <option value={"career"}>Career</option>
                        <option value={"sourcing"}>Sourcing</option>
                        <option value={"sales"}>Sales</option>
                      </select>
                      <select placeholder="Select Country">
                        <option value={""}>Select Country</option>
                        {CountryList.map((val, ind) => (
                          <option value={val.code}>{val.name}</option>
                        ))}
                        <option value={"sales"}>Sales</option>
                      </select>
                      <textarea rows={5} placeholder="Message" />
                      <Button className="border-gradient-green" text="Send" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" our-friends mt-4 mb-4 contact-us-map">
          <div className="row g-0  justify-content-center align-items-center">
            <div className="col-12 col-xxl-12">
              <img src={MapImage} className="w-100" />
              <div className="mapouter w-100">
                <div className="gmap_canvas w-100">
                  <iframe
                    className=""
                    height="400"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Av.%20Alfredo%20Benavides%201944,%20Miraflores%2015074&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default ContactUs;
