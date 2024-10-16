import React, { useEffect, useState } from "react";
import "./SignIn.css";
import ButtonField from "components/ButtonField";
import icoGoogle from "assets/google.svg";
import frameIphone from "assets/frames.png";
import logo from "assets/LOGO.png";
import { loginApi } from "apis/loginApi";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username);
  console.log(password);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await loginApi(username, password)
      console.log(res);
      localStorage.setItem('token', res.token);
      navigate('/home')
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
    }
  }
  return (
    <div className="SignIn">
      <div className="left-side">
        <img src={frameIphone} alt="" />
      </div>
      <div className="right-side">
        <img className="logo" src={logo} alt="" />
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username, or mail" onChange={e => { setUsername(e.target.value) }} />
          <input type="text" placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
          <ButtonField className="cusstomButtonLogin" type="submit">Log in</ButtonField>
          <div className="other">
            <hr />
            <span>or</span>
          </div>
          <div className="other-login">
            <img src={icoGoogle} alt="" />
            <ButtonField className="cusstonButton">
              Continue with google
            </ButtonField>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
