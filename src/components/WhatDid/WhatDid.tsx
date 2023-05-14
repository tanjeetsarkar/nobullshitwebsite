import React from "react";
import "./WhatDid.css";

const WhatDid: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start mt-5">
      <h2 className="pb-1">What I do</h2>
      <h5
        className="text-md-start text-center"
        style={{
          maxWidth: "500px",
        }}
      >
        I bring ideas to life by building and maintaining{" "}
        {<span className="wd-span">stunning and intuitive</span>} {" "}
        web applications that captivate and{" "}
        {<span className="wd-span">engage users</span>}. My motto is Crafting
        digital experiences that inspire and{" "}
        {<span className="wd-span">elevate businesses</span>} to the next level.
      </h5>
    </div>
  );
};

export default WhatDid;
