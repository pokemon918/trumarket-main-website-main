import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import MobileMockAnimation from "../../assets/animation/mobilemock.json";

const MobileMock = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: MobileMockAnimation,
    });
    return () => lottie.stop();
  }, []);
  return <div className="Timeline-lotie" ref={anime}></div>;
};

export default MobileMock;