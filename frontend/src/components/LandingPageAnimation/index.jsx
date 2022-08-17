import React, { useState } from "react";
import Lottie from "react-lottie";
import landingAnimation from "../../assets/animations/landingAnimation.json";

export const LandingPageAnimation = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="animation"
      style={{
        width: "75%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "600px",
        maxHeight: "600px",
        zIndex: "1",
      }}
    >
      <Lottie options={defaultOptions} isStopped={animationState.isStopped} isPaused={animationState.isPaused} />
    </div>
  );
};
