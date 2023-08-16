import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/partner/www.holyfruitperu.com.png";
import img2 from "../../assets/images/partner/https___www.ulima.edu.pe_.jpg";
import img3 from "../../assets/images/partner/https___www.importpromotiondesk.com_en_.png";
import img4 from "../../assets/images/partner/https___emprendeup.pe_.png";
import img5 from "../../assets/images/partner/https___bionatsolutions.com.jpg";
import img6 from "../../assets/images/partner/http___www.naturalsouthfruit.com.png";

const CustomCard = ({ imgSrc, link }) => (
  <div>
    <a href={link} target="_blank">
      <img src={imgSrc} height={110} width={110}></img>
    </a>
  </div>
);
const OurFriends = () => {
  const ourFriendsData = [
    { image: img1, link: "http://www.holyfruitperu.com/" },
    { image: img2, link: "https://www.ulima.edu.pe/" },
    { image: img3, link: "https://www.importpromotiondesk.com/en/" },
    { image: img4, link: "https://emprendeup.pe/" },
    { image: img5, link: "https://www.bionatsolutions.com/" },
    { image: img6, link: "https://www.naturalsouthfruit.com/" },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="ourfriends">
      <h2>Our Friends</h2>
      <Slider {...settings}>
        {ourFriendsData.map((slide, index) => {
          return (
            <div
              className="d-flex justify-content-center align-content-center align-items-center"
              key={index}
            >
              <CustomCard imgSrc={slide.image} link={slide.link} />
              {/* <img src={slide.img} alt={`slide${index}`} /> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default OurFriends;
