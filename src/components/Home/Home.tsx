import React from "react";
import "./Home.css";
import Avatar from "../Avatar/Avatar";
import Biography from "../Biography/Biography";
import LetsConnect from "../LetsConnect/LetsConnect";

const Home: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column">
      <div className="d-md-none d-flex align-items-center justify-content-center pb-3">
        <Avatar />
      </div>
      <div id="top-heading" className="top-heading">
        <h1 className="text-md-start text-center">
          <b>
            Hi I'm Tanjeet, a special human with ability to craft and build. I
            turn ideas into brand.
          </b>
        </h1>
      </div>
      <div className="d-flex mt-5 py-2 justify-content-md-start justify-content-center align-items-center">
        <div className="d-none d-md-block">
          <Avatar />
        </div>
        <Biography />
        <div className="d-none d-md-block">
          <LetsConnect />
        </div>
      </div>
    </div>
  );
};

export default Home;
