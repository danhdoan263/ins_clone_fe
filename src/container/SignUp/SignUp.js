import React from 'react'
import "./SignUp.css";
import ButtonField from "components/ButtonField";
import icoGoogle from "assets/google.svg";
import frameIphone from "assets/frames.png";
import logo from "assets/LOGO.png";
const SignUp = () => {
    const handleSignUp = () => {

    }
    return (
        <div className="SignUp">
            <div className="left-side">
                <img src={frameIphone} alt="" />
            </div>
            <div className="right-side">
                <img className="logo" src={logo} alt="" />
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Username, or mail" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Full Name" />
                    <ButtonField className="cusstomButtonLogin" type="submit">Log in</ButtonField>


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
    )
}

export default SignUp