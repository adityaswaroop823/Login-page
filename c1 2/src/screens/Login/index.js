import "./login.css";
import amazonLogo from "../../assets/images/amazonLogo.png";
import treeImage from "../../assets/images/tree.png";
import InputTextBox from "../../components/InputTextBox";
import LoginHelper from "../../components/LoginHelper";
import LoginHelperTypes from "../../components/utils/LoginHelperTypes";
import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsgEmail, setErrorMsgEmail] = useState("");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleEmailChange(e) {
    setEmail(e);
    setErrorMsgEmail("");
  }

  function handlePasswordChange(e) {
    setPassword(e);
  }

  function onSubmit() {
    if (email.length == 0) {
      setErrorMsgEmail("The email field is required");
      return;
    }
    if (!validateEmail(email)) {
      console.log("succes");
      setErrorMsgEmail("Please enter valid email");
      return;
    }
  }
  return (
    <>
      <div className="mainDiv">
        <div className="innerDiv">
          <div className="amazonDiv">
            <img className="amazonLogoImg" src={amazonLogo} alt="amazonLogo" />
          </div>

          <p className="loginHeading JSRegular">Login</p>
          <div className="treeDiv">
            <img src={treeImage} alt="treeImage" width={"100%"} />
            <div style={{ width: "100%" }}>
              <InputTextBox
                hint="Email"
                errorMsg={errorMsgEmail}
                onChange={handleEmailChange}
              />
              <InputTextBox
                hint="Password"
                errorMsg=""
                onChange={handlePasswordChange}
              />
              <div className="button JSRegular" onClick={onSubmit}>
                Sign In
              </div>
              <div className="utils JSRegular">
                <p className="forgotPassword">Forgot Password?</p>
                <p className="signUp">New User? Sign Up</p>
              </div>
              <p className="or">or</p>
              <p style={{ marginTop: "24px" }} />
              <LoginHelper
                type={LoginHelperTypes.google}
                bgcolor="rgba(66, 133, 244, 1)"
              />
              <p style={{ marginTop: "16px" }} />
              <LoginHelper
                type={LoginHelperTypes.facebook}
                bgcolor="rgba(24, 119, 242, 1)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
