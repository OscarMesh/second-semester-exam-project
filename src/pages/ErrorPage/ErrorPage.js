import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import error from "../../assets/404.json";
import Lottie from "react-lottie";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Helmet>
        <title>Error Page</title>
        <meta name="description" content="Page not found" />
        <link rel="canonical" href="*" />
      </Helmet>
      <div className="error">
        <div className="error-page">
          <Lottie options={defaultOptions} />
          <Link to="/">
            <button>Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
