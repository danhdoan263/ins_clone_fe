import React, { useEffect, useState } from 'react';
import './FooterReaction.css';
import { getLikePostAPI, likePostAPI } from 'apis/likePostAPI';
const FooterReaction = ({ postCaption, fullname, post_id, token }) => {
  const [like, setLike] = useState(0);
  //getLike of the post

  useEffect(() => {
    const fetchLikePost = async () => {
      try {
        const res = await getLikePostAPI(post_id, token);
        setLike(res.likes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLikePost();
  }, [post_id, token]);

  const handleLikePost = async () => {
    try {
      const res = await likePostAPI(post_id, token);
      setLike(res.likes);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="footer-reaction">
        <div className="left-reaction">
          <div
            className="icon-Activity_Feed reaction-size"
            onClick={handleLikePost}
          ></div>
          <div className="icon-comment reaction-size"></div>
          <div className="icon-share reaction-size"></div>
        </div>
        <div className="right-reaction">
          <div className="icon-save reaction-size"></div>
        </div>
      </div>
      <div className="footer-liked">{like}</div>
      <div className="footer-comment">
        {/* activeUser === user's poster is comment or first comment added will have active to pin this commented*/}
        <div className="User-Comment">
          <span className="User-name">{fullname}</span>
          <span className="comment">{postCaption}</span>
        </div>
        <details>
          <summary>View all 100 comments</summary>
          <ul>
            <li>jasdalskdj</li>
            <li>jasdalskdj</li>
            <li>jasdalskdj</li>
            <li>jasdalskdj</li>
            <li>jasdalskdj</li>
          </ul>
        </details>
      </div>
      <div className="footer-add-comment">
        <div className="list-enmoji">
          <div className="icon-emoji"></div>
        </div>
        <input type="text" placeholder="Add a comment..." />
        <div className="post-comment">Post</div>
      </div>
    </div>
  );
};

export default FooterReaction;
