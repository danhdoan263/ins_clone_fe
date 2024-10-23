import React, { useEffect, useState } from "react";
import "./HeaderNav.css";
import logo from "assets/LOGO.png";
import account_img from "assets/account.png";
import { Link } from "react-router-dom";
const HeaderNav = () => {
  const [avatar, setAvatar] = useState(account_img)
  useEffect(() => {
    const avatar_url = localStorage.getItem('profile_url_img')

    const CheckAvatar = async () => {
      if (avatar_url) {
        setAvatar(avatar_url)
      }
    }
    CheckAvatar()
  }, [])


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

          <Link to="newPost">
            <div className="icon-New_post "></div>
          </Link>

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
