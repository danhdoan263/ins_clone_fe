import React from "react";
import "./Poster.css";
import user from "assets/account.png";
import PostImgUserName from "container/HomeUser/chunk/Poster/PostImgUserName/PostImgUserName";
import FooterReaction from "container/HomeUser/chunk/Poster/FooterReaction/FooterReaction";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Poster = () => {
  return (
    <div className="Poster">
      <div className="Poster-Header">
        <PostImgUserName />
      </div>
      <div className="Post-img">
        <LazyLoadImage src={user} alt="" />
      </div>
      <div className="Poster-fotter">
        <FooterReaction />
      </div>
    </div>
  );
};

export default Poster;
