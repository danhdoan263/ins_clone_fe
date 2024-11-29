import React, { useState } from 'react';
import './SignUp.css';
import ButtonField from 'components/ButtonField';
import icoGoogle from 'assets/google.svg';
import frameIphone from 'assets/frames.png';
import logo from 'assets/LOGO.png';
import { signUpAPI } from 'apis/signUpAPI';
import { useNavigate } from 'react-router-dom';
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
            SignIn
          </ButtonField>

          {/* LOGIN with Google future */}
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

export default SignUp;
