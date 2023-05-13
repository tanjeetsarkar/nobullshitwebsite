import React from "react";

const Avatar: React.FC = () => {
  return (
    <div
      id="avatar"
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "155px",
        height: "155px",
        borderRadius: "50% !important",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80"
        className="img-thumbnail rounded-circle"
        alt="..."
        style={{
          width: "124px",
          height: "124px",
        }}
      />
    </div>
  );
};

export default Avatar;
