import React from "react";
import "./Loader.css"
import Lottie from "react-lottie";
import loading from "../../assets/99274-loading.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (

    <div className="loader">
        <div className="loaderImage">

      <Lottie options={defaultOptions} />
        </div>
    </div>
  );
};

export default Loader;
