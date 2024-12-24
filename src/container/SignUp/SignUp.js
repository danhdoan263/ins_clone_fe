import React, { useState } from 'react';
import './SignUp.css';
import ButtonField from 'components/ButtonField';
import icoGoogle from 'assets/google.svg';
import frameIphone from 'assets/frames.png';
import logo from 'assets/LOGO.png';
import { signUpAPI } from 'apis/signUpAPI';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setfull_name] = useState('');
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await signUpAPI(username, password, email, full_name);
    if (res.acknowledged) {
      alert('sign up successful');
      navigate('/');
    }
  };
  return (
    <div className="SignUp">
      <div className="left-side">
        <img src={frameIphone} alt="" />
      </div>
      <div className="right-side">
        <img className="logo" src={logo} alt="" />
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username, or mail"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setfull_name(e.target.value);
            }}
          />
          <ButtonField className="cusstomButtonLogin" type="submit">
            Sign Up
          </ButtonField>

          {/* LOGIN with Google future */}
          <div className="other">
            <hr />
            <span>or</span>
          </div>
          <Link to="/">
            <div className="other-login">SignIn</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
