import React, { useEffect, useState } from 'react';
import './HeaderNav.css';
import logo from 'assets/LOGO.png';
import account_img from 'assets/account.png';
import { Link } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import CreateNewPost from 'container/CreateNewPost/CreateNewPost';
const HeaderNav = () => {
  const [avatar, setAvatar] = useState(account_img);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const avatar_url = localStorage.getItem('profile_url_img');

    const CheckAvatar = async () => {
      if (avatar_url) {
        setAvatar(avatar_url);
      }
    };
    CheckAvatar();
  }, []);

  const handlePopupCreatePost = () => {
    setModal(!modal);
  };

  return (
    <div className="HeaderNav">
      <div className="nav-wrapper">
        <div className="wraper-logo">
          <img src={logo} alt="" />
        </div>

        {/* ----------- */}

        <div className="wrapper-research">
          <input type="text" placeholder="search" />
        </div>

        {/* -----Router------ */}

        <div className="wrapper-menu">
          <Link to="/home">
            <div className="icon-Home_fill "></div>
          </Link>

          <Link to="/home/MessUser/">
            <div className="icon-Messenger "></div>
          </Link>

          <div to="newPost" onClick={handlePopupCreatePost}>
            <div className="icon-New_post "></div>
          </div>

          {/* Modal */}
          <Modal show={modal} onClose={handlePopupCreatePost}>
            <CreateNewPost />
          </Modal>
          {/* endModal */}

          <Link to="findPeople">
            <div className="icon-Find_people "></div>
          </Link>

          <Link to="feed">
            <div className="icon-Activity_Feed "></div>
          </Link>

          <Link to="/home/userProfile/">
            <img src={avatar ? avatar : account_img} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
