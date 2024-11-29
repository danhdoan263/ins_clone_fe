import React, { useEffect, useRef, useState } from 'react';
import './HeaderNav.css';
import logo from 'assets/LOGO.png';
import account_img from 'assets/account.png';
import { Link } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import CreateNewPost from 'container/CreateNewPost/CreateNewPost';
import { searchUserAPI } from 'apis/searchAPI';
import UserTarget from 'components/UserTarget/UserTarget';
import ButtonField from 'components/ButtonField';
import { followUserAPI, unFollowUserAPI } from 'apis/followAPI';
const HeaderNav = () => {
  const [searchtext, setSearchtext] = useState('');
  const [userList, setUserList] = useState([]);
  const [avatar, setAvatar] = useState(account_img);
  const [modal, setModal] = useState(false);
  const isFirstRender = useRef(true);
  const [followChange, setFollowChange] = useState(0);
  const user_id = localStorage.getItem('_id');
  console.log(userList);

  useEffect(() => {
    const avatar_url = localStorage.getItem('profile_url_img');

    const CheckAvatar = async () => {
      if (avatar_url) {
        setAvatar(avatar_url);
      }
    };
    CheckAvatar();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (searchtext.trim() === '') {
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      const response = await searchUserAPI(searchtext, user_id);
      setUserList(response.userList);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchtext, followChange]);
  const handlePopupCreatePost = () => {
    setModal(!modal);
  };

  const handleFollowUser = async (id) => {
    const data = {
      user_id: user_id,
      otherUser_id: id,
    };
    const response = await followUserAPI(data);
    if (response.status === 200) {
      setFollowChange(followChange + 1);
    }
    console.log(response);
  };
  const handleUnFollowUser = async (id) => {
    const response = await unFollowUserAPI(user_id, id);
    if (response.status === 200) {
      setFollowChange(followChange + 1);
    }
    console.log(response);
  };

  return (
    <div className="HeaderNav">
      <div className="nav-wrapper">
        <div className="wraper-logo">
          <img src={logo} alt="" />
        </div>

        {/* ----------- */}

        <div className="wrapper-research">
          <input
            type="text"
            placeholder="searchUserName"
            onChange={(e) => {
              setSearchtext(e.target.value.replace(/\s/g, ''));
              if (e.target.value === '') {
                setUserList([]);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault();
              }
            }}
          />
          {userList.length !== '' ? (
            <div className="userList">
              {userList.map((value) => {
                return (
                  <div className="user" key={value._id}>
                    <UserTarget
                      user_img={value.profile_url_img}
                      name={value.username}
                      mess={value.full_name}
                      className="user"
                    />
                    <div className="user-follow">
                      {user_id === value._id ? (
                        <></>
                      ) : value.followed === false ? (
                        <ButtonField
                          className="button-follow"
                          onClick={() => {
                            handleFollowUser(value._id);
                          }}
                        >
                          follow
                        </ButtonField>
                      ) : (
                        <ButtonField
                          className="button-follow"
                          onClick={() => {
                            handleUnFollowUser(value._id);
                          }}
                        >
                          unfollow
                        </ButtonField>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>not founds</p>
          )}
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
            <CreateNewPost modal={modal} setModal={setModal} />
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
