import { Button } from "@mui/material";
import { auth, provider } from "../../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styles from "./Signin.module.scss";

const SignIn = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // const token = credential.accessToken;
          // const user = result.user;
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginLogo}>
          <img src="./react_logo.png" alt="" />
        </div>
        <Button onClick={signIn}>ログイン</Button>
      </div>
    </>
  );
};

export default SignIn;
