import React from "react";
import user from "assets/account.png";
import "./PostImgUserName.css";
const PostImgUserName = () => {
  return (
    <>
      <div className="Poster-img-username">
        <div className="Poster-user">
          <img src={user} alt="" />
        </div>
        <span className="Poster-username">terrylucas</span>
      </div>
      <div className="icon-dots-three-horizontal"></div>
    </>
  );
};

export default PostImgUserName;
