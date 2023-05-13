import React from "react";
import "./Biography.css";

const Biography: React.FC = () => {
  return (
    <div className="container d-flex flex-column">
      <h3>Biography</h3>
      <p
        className="designed-p"
        style={{
          maxWidth: "500px",
        }}
      >
        Getting Buff +1 for learning, Buff +2 for documentation and more buff on
        building brand. Excited on{" "}
        <span className="blue">React, APIs, Python </span>
        and <span className="lime">AI.</span>
      </p>
    </div>
  );
};

export default Biography;
