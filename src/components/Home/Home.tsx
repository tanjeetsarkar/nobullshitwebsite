import React from "react";
import "./Home.css";
import Avatar from "../Avatar/Avatar";
import Biography from "../Biography/Biography";
import LetsConnect from "../LetsConnect/LetsConnect";
import twitter from "../../assets/Logo white.svg";
import WhatDid from "../WhatDid/WhatDid";
import Card from "../Card/Card";
import CardContainer from "../Card/CardContainer";

const Home: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column">
      <div className="d-md-none d-flex flex-column align-items-center justify-content-center pb-3">
        <Avatar />
        <div className="pt-3">
          <a
            href="https://twitter.com/TanjeetSarkar"
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon-svg-mobile" src={twitter} alt="twitter" />
          </a>
        </div>
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
        <div className="d-none d-md-flex">
          <Avatar />
        </div>
        <Biography />
        <div className="d-none d-md-block">
          <LetsConnect />
        </div>
      </div>
      <div className="mt-5 d-flex flex-md-row flex-column justify-content-md-start align-items-md-start justify-content-center align-items-center">
        <WhatDid />
        <CardContainer cards={[{
          iconName: "globe",
          title: "Web Development",
          description: "You will receive top of the line website"
        }, {
          iconName: "clipboard",
          title: "Web APIs",
          description: "You will receive a customized plan for your fitness journey, and lots of support."
          }, {
          iconName: "globe",
          title: "Support",
          description: "You will receive a customized plan for your fitness journey, and lots of support."
          }]} />
      </div>
    </div>
  );
};

export default Home;
