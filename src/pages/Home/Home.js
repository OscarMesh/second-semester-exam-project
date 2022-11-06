import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./Home.css";
import Lottie from "react-lottie";
import home from "../../assets/welcome.json";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: home,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Home of Oscar's AltSchool exam Project"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home">
        <SideBar />
        <div className="home-content">
          <h1>
            Oscar <span>GitHub Repo </span> Project
          </h1>
          <p>
            Hello ! My name is <span> Okereke Oscar.</span> I am a Frontend
            Developer This is my Second Semester exam Project for the Second
            Semester. <span> Enjoy!!! </span>
          </p>
          <div className="animation">
            <Lottie options={defaultOptions} background="#fff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
