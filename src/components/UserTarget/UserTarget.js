import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import propType from 'prop-types';
import './UserTarget.css';
import defaultImage from 'assets/account.png';
const UserTarget = ({ user_img, name, mess, className, onClick }) => {
  const [user_imgage, setUser_img] = useState(defaultImage);
  useEffect(() => {
    if (!(user_img == null)) {
      setUser_img(user_img);
    }
  }, [user_img]);
  return (
    <div className={`userTarget ${className}`} onClick={onClick}>
      <div className="Profile-pic">
        <LazyLoadImage src={user_imgage} alt="" />
      </div>
      <div className="Profile-name">
        <div className="Account-name Secondary-text-sub">
          {mess || 'unKnow user Name'}
        </div>

        <div className="User-Name Secondary-text-heading">{name}</div>
      </div>
    </div>
  );
};
UserTarget.propType = {
  user: propType.string.isRequired,
  onClick: propType.func,
};

export default UserTarget;
