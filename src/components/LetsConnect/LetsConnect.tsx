import React from "react";
import twitter from "../../assets/Logo white.svg";
import "./LetsConnect.css";

const LetsConnect: React.FC = () => {
  return (
    <div className="d-flex flex-column px-4">
      <h2>Lets Connect</h2>
      <a
        href="https://twitter.com/TanjeetSarkar"
        style={{ cursor: "pointer" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon-svg " src={twitter} alt="twitter" />
      </a>
    </div>
  );
};

export default LetsConnect;
