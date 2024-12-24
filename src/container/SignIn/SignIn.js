import React, { useState } from 'react';
import './SignIn.css';
import ButtonField from 'components/ButtonField';
import frameIphone from 'assets/frames.png';
import logo from 'assets/LOGO.png';
import { signInAPI } from 'apis/signInAPI';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from 'apis/messengerAPI';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInAPI(username, password);
      console.log(res);

      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('_id', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('username', res.username);
        localStorage.setItem('full_name', res.full_name);
        localStorage.setItem('profile_url_img', res.profile_url_img);
      }

      getFollower();
    } catch (error) {
      console.error('login error:', error);
    }
  };

  const getFollower = async () => {
    try {
      const response = await getUser();
      localStorage.setItem(
        'listUserFollowed',
        JSON.stringify(response.data.follower)
      );
      navigate('/home');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="SignIn">
      <div className="left-side">
        <img src={frameIphone} alt="iPhone Frame" />
      </div>
      <div className="right-side">
        <img className="logo" src={logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username, or mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonField className="customButtonLogin" type="submit">
            Log in
          </ButtonField>
          <div className="other">
            <hr />
            <span>or</span>
          </div>
          <Link to="SignUp">
            <div className="other-login">SignUp</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
