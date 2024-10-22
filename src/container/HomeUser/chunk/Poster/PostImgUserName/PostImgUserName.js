import React, { useEffect, useState } from "react";
import user from "assets/account.png";
import "./PostImgUserName.css";
const PostImgUserName = ({ avatar, fullname }) => {

  const [userImage, setUserImage] = useState(user)
  useEffect(() => {
    if (avatar) {
      setUserImage(avatar)
    }
  }, [avatar])

  return (
    <>
      <div className="Poster-img-username">
        <div className="Poster-user">
          <img src={userImage} alt="" />
        </div>
        <span className="Poster-username">{fullname}</span>
      </div>
      <div className="icon-dots-three-horizontal"></div>
    </>
  );
};

export default PostImgUserName;
