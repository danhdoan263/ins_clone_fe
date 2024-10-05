import React from "react";
import "./LoginPage.css";
import ButtonField from "components/ButtonField";
import icoGoogle from "assets/google.svg";
import frameIphone from "assets/frames.png";
import logo from "assets/LOGO.png";
const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="left-side">
        <img src={frameIphone} alt="" />
      </div>
      <div className="right-side">
        <img className="logo" src={logo} alt="" />
        <form>
          <input type="text" placeholder="Username, or mail" />
          <input type="text" placeholder="Password" />
          <ButtonField className="cusstomButtonLogin">Log in</ButtonField>
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
