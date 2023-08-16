import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import TimelineAnimation from "../../assets/animation/timeline.json";

const Timeline = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: TimelineAnimation,
    });
    return () => lottie.stop();
  }, []);
  return <div className="Timeline-lotie" ref={anime}></div>;
};

export default Timeline;