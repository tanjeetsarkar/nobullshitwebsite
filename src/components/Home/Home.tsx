import React from "react";
import "./Home.css";
import Avatar from "../Avatar/Avatar";
import Biography from "../Biography/Biography";

const Home: React.FC = () => {
  return (
      <div className="container-fluid d-flex flex-column">
          <div className="d-sm-none">
              <Avatar />
          </div>
      <div id="top-heading" className="top-heading">
        <h1 className="">
          <b>
            Hi I'm XXXXX, a special human with ability to craft and build. I
            turn ideas into brand.
          </b>
        </h1>
      </div>
      <div className="d-flex">
        <div className="d-none d-sm-block">
          <Avatar />
        </div>
        <Biography />
      </div>
    </div>
  );
};

export default Home;
