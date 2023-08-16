import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import LoaderAnimation from "../../assets/animation/tru_loader.json";

const Loader = ({loading}) => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: LoaderAnimation,
    });
    return () => lottie.stop();
  }, []);
  return <div className={`${loading ? "loader-lotie" : 'd-none loader-lotie'}`} ref={anime}></div>;
};

export default Loader;