import React from "react";
import "./Biography.css";

const Biography: React.FC = () => {
  return (
    <div className="d-flex flex-column ms-md-5 justify-content-center align-items-center justify-content-md-start align-items-md-start">
      <h2 className="pb-1">Biography</h2>
      <h5
        className="designed-p text-md-start text-center"
        style={{
          maxWidth: "500px",
        }}
      >
        Getting Buff +1 for learning, Buff +2 for documentation and more buff on
        building brand. Excited on{" "}
        <span className="blue">React, APIs, Python </span>
        and <span className="lime">AI.</span>
      </h5>
    </div>
  );
};

export default Biography;
