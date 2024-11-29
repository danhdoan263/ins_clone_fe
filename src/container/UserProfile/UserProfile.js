import React, { useEffect, useRef, useState } from 'react';
import './UserProfile.css';
import account from 'assets/account.png';
import ButtonField from 'components/ButtonField';
import { uploadAvatarAPI } from 'apis/uploadAvatarAPI';

const UserProfile = () => {
  // State manage username and avatar
  const [username, setUsername] = useState('Anonymus');
  const [avatar, setAvatar] = useState(account);

  // get reference from imput avatar handlechange
  const fileInputRef = useRef(null);

  // get user info localStorage
  const getUserInfo = () => {
    const fullname = localStorage.getItem('full_name');
    if (fullname) {
      setUsername(fullname);
    }
  };

  // check and set avatar localStorage
  const checkAvatar = async () => {
    const Avatar = localStorage.getItem('profile_url_img');
    if (Avatar) {
      // const response = await fetch(Avatar);
      // if (response.ok) {
      //   const newBlob = await response.blob();
      //   const newAvatar = URL.createObjectURL(newBlob);
      //   setAvatar(newAvatar);
      // }
      setAvatar(Avatar);
    }
  };

  // process avatar when changed avtar direct client
  const handleChangeAvatar = async (e) => {
    const newAvatar = URL.createObjectURL(e.target.files[0]);
    setAvatar(newAvatar);

    const formData = new FormData();
    formData.append('photo', e.target.files[0]);

    const data = await uploadAvatarAPI(formData);

    // update profile_url_img localStorage
    localStorage.setItem('profile_url_img', data.data.filePath);
  };

  //  handle click input action from fileInputRef
  const handleClick = () => {
    fileInputRef.current.click();
  };

  // useEffect chạy khi component mount để lấy thông tin người dùng và avatar
  useEffect(() => {
    getUserInfo();
    checkAvatar();
  }, []);

  return (
    <div className="User-profile">
      <div className="user-body">
        <div className="user-body-info">
          <div className="info-avatar">
            <img src={avatar} alt="User Avatar" onClick={handleClick} />
          </div>
          <div className="info-maintain">
            <div className="maintain-profiler">
              <div className="maintain-profiler-username">{username}</div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleChangeAvatar}
              />
              <ButtonField className="button-modifier">
                Edit Profile
              </ButtonField>
              <ButtonField className="button-modifier">
                View Archive
              </ButtonField>
              <span className="icon-option"></span>
            </div>
            <div className="maintain-post-follower">
              <div className="maintain-post">1 post</div>
              <div className="maintain-followers">3 followers</div>
              <div className="maintain-following">3 following</div>
            </div>
          </div>
        </div>
        <div className="user-body-post"></div>
      </div>
    </div>
  );
};

export default UserProfile;
