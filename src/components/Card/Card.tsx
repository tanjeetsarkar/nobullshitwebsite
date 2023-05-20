import React from "react";
import "./Card.css";
import Globe from "../../assets/Globe.svg";
import Clipboard from "../../assets/ClipboardList.svg";

const iconTypes: any = {
  globe: Globe,
  clipboard: Clipboard,
}

interface CardProps {
  iconName: string;
}

const Card: React.FC<CardProps>= ({iconName}) => {
  return (
    <div className="container py-2 px-0 my-4 parent-head">
      <div className="shadow border rounded-circle bg-dark-subtle custom-head">
        <img className="shadow img-thumbnail rounded-circle img-card " src={iconTypes[iconName]} alt="icon"/>
      </div>
      <div className="card text-center shadow bg-body-secondary custom-body">
        <div className="card-body pt-5">
          <h5 className="card-title">Web Development</h5>
          <p className="card-text">
            You will receive a customized plan for your fitness journey, and
            lots of support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
