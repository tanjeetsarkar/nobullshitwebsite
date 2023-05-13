import React from "react";
import "./Home.css";
import Avatar from "../Avatar/Avatar";
import Biography from "../Biography/Biography";

const Home: React.FC = () => {
  return (
      <div className="container-fluid d-flex flex-column">
          <div className="d-sm-none d-flex align-items-center justify-content-center pb-3">
              <Avatar />
          </div>
      <div id="top-heading" className="top-heading">
        <h1 className="">
          <b>
            Hi I'm Tanjeet, a special human with ability to craft and build. I
            turn ideas into brand.
          </b>
        </h1>
      </div>
      <div className="d-flex mt-5 py-2 justify-content-sm-start justify-content-center align-items-center">
        <div className="d-none d-sm-block">
          <Avatar />
        </div>
        <Biography />
      </div>
    </div>
  );
};

export default Home;
