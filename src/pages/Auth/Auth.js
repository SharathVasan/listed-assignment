// Dependency imports
import { useGoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms/userState";

// Local imports
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";

// Style imports
import Au from "./Auth.module.scss";

const Auth = () => {
  //eslint-disable-next-line
  const [user, setUser] = useRecoilState(userState);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <div className={Au.maincontainer}>
      <div className={Au.leftlogoholder}>
        <h1 className={Au.projname}>Board.</h1>
      </div>
      <div className={Au.rightauthholder}>
        <div className={Au.authholder}>
          <h2 className={Au.signinhead}>Sign In</h2>
          <h3 className={Au.signintotext}>Sign in to your account</h3>
          <div className={Au.signinbuttonholders}>
            <div className={Au.signinbuttonholder} onClick={() => login()}>
              <img
                className={Au.signinicon}
                src={GoogleIcon}
                alt="google_icon"
              />
              <h4 className={Au.signinwithtext}>Sign in with Google</h4>
            </div>
            <div className={Au.signinbuttonholder}>
              <img className={Au.signinicon} src={AppleIcon} alt="apple_icon" />
              <h4 className={Au.signinwithtext}>Sign in with Apple</h4>
            </div>
          </div>
          <div className={Au.signinfieldholder}>
            <h3 className={Au.label}>Email Address</h3>
            <input
              className={Au.field}
              type="text"
              placeholder="johndoe@gmail.com"
              style={{ backgroundColor: "#F5F5F5" }}
            />
            <h3 className={Au.label}>Password</h3>
            <input
              className={Au.field}
              type="password"
              placeholder="aldjflasdfjlk"
              style={{ backgroundColor: "#EAEAEA" }}
            />
            <h4 className={Au.forgotpasswordlink}>Forgot password?</h4>
            <button className={Au.signinbutton}>Sign In</button>
          </div>
          <div className={Au.noaccounttextholder}>
            <h5 className={Au.noaccounttext}>
              Don't have an account?{" "}
              <span className={Au.registertext}>Register here</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
