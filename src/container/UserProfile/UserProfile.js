import React, { useEffect, useRef, useState } from 'react';
import './UserProfile.css';
import account from 'assets/account.png'; // Đảm bảo đường dẫn đúng
import ButtonField from 'components/ButtonField';
import { uploadAvatarAPI } from 'apis/uploadAvatarAPI';

const UserProfile = () => {
  const [username, setUsername] = useState('Anonymus');
  const [avatar, setAvatar] = useState(account);

  const fileInputRef = useRef(null);

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
      try {
        const response = await fetch(Avatar);
        if (response.ok) {
          setAvatar(Avatar);
        } else {
          setAvatar(account);
        }
      } catch (error) {
        console.error('Error fetching avatar:', error);
        setAvatar(account);
      }
    } else {
      setAvatar(account);
    }
  };

  const handleChangeAvatar = async (e) => {
    if (e.target.files.length > 0) {
      const newAvatar = URL.createObjectURL(e.target.files[0]);
      setAvatar(newAvatar);

      const formData = new FormData();
      formData.append('photo', e.target.files[0]);

      try {
        const data = await uploadAvatarAPI(formData);
        localStorage.setItem('profile_url_img', data.data.filePath);
      } catch (error) {
        console.error('Error uploading avatar:', error);
        setAvatar(newAvatar);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

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
