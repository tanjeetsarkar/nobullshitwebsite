import React from "react";
import "./WhatDid.css";

const WhatDid: React.FC = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start py-2"
      style={{
        maxWidth: "500px",
      }}
    >
      <h2 className="pb-1">What I do</h2>
      <h5 className="text-md-start text-center">
        I bring ideas to life by building and maintaining{" "}
        {<span className="wd-span">stunning and intuitive</span>} web
        applications that captivate and{" "}
        {<span className="wd-span">engage users</span>}. My motto is Crafting
        digital experiences that inspire and{" "}
        {<span className="wd-span">elevate businesses</span>} to the next level.
      </h5>
    </div>
  );
};

export default WhatDid;
