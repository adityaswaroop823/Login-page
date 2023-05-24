import "./loginHelper.css";
import LoginHelperTypes from "../utils/LoginHelperTypes.js";
import googleIcon from "../../assets/images/google.png";
import facebookIcon from "../../assets/images/facebook.png";

const LoginHelper = ({ type, bgcolor }) => {
  console.log(LoginHelperTypes);
  return (
    <div className="loginHelperDiv" style={{ background: bgcolor }}>
     <div style={{width:"30%"}}>
     <img
        className="icon"
        src={type == LoginHelperTypes.google ? googleIcon : facebookIcon}
        alt="icon"
        width="36px"
        height="36px"
      />
      </div> 
   <div ><p className="JSSemiBold">CONTINUE WITH {type}</p></div>   
    </div>
  );
};

export default LoginHelper;
