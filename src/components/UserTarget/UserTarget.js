import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import propType from "prop-types";
import "./UserTarget.css";
const UserTarget = ({ user, name, mess, className }) => {
  return (
    <div className={`userTarget ${className}`}>
      <div className="Profile-pic">
        <LazyLoadImage src={user} alt="" />
      </div>
      <div className="Profile-name">
        <div className="Account-name Secondary-text-sub">
          {mess || "Shirley romero"}
        </div>

        <div className="User-Name Secondary-text-heading">{name}</div>
      </div>
    </div>
  );
};
UserTarget.propType = {
  user: propType.string.isRequired,
};

export default UserTarget;
