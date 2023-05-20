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
        src="https://media.licdn.com/dms/image/D5603AQF1hbRmy4cR6w/profile-displayphoto-shrink_800_800/0/1683686033722?e=1689811200&v=beta&t=VvYMRew76z9FuL-VH3rd22CxyUjF1wIy2FuvdyCd8aM"
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
