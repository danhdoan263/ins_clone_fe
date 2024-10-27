import React, { useEffect, useState } from 'react';
import user from 'assets/account.png';
import './PosterHeader.css';
import { deletePostApi } from 'apis/deletePostApi';
const PosterHeader = ({ avatar, fullname, token, post_id }) => {
  const [userImage, setUserImage] = useState(user);
  const [showPopover, setShowPopover] = useState(false);
  useEffect(() => {
    if (avatar) {
      setUserImage(avatar);
    }
  }, [avatar]);

  const togglePopover = () => {
    setShowPopover((prev) => !prev);
  };

  const handleDeletePost = async () => {
    if (post_id) {
      const res = await deletePostApi(post_id, token);
      console.log(res);
    }
  };
  return (
    <>
      <div className="Poster-img-username">
        <div className="Poster-user">
          <img src={userImage} alt="" />
        </div>
        <span className="Poster-username">{fullname}</span>
      </div>
      <div className="icon-dots-three-horizontal" onClick={togglePopover}>
        {showPopover && (
          <div className="popover">
            <div className="deletepost" onClick={handleDeletePost}>
              Delete
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PosterHeader;
