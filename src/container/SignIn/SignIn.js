import React, { useState } from 'react';
import './SignIn.css';
import ButtonField from 'components/ButtonField';
import icoGoogle from 'assets/google.svg';
import frameIphone from 'assets/frames.png';
import logo from 'assets/LOGO.png';
import { signInAPI } from 'apis/signInAPI';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInAPI(username, password);
      console.log(res);

      // Lưu thông tin đăng nhập vào localStorage
      localStorage.setItem('token', res.token);
      localStorage.setItem('_id', res._id);
      localStorage.setItem('email', res.email);
      localStorage.setItem('username', res.username);
      localStorage.setItem('full_name', res.full_name);
      localStorage.setItem('profile_url_img', res.profile_url_img);

      // Điều hướng đến trang chính
      navigate('/home');
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
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
          <div className="other-login">
            <img src={icoGoogle} alt="Google Icon" />
            <ButtonField className="customButton">
              Continue with Google
            </ButtonField>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
