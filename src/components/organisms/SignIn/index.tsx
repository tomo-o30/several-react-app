import { Button } from "@mui/material";
import { auth } from "../../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // const token = credential.accessToken;
          // const user = result.user;
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </>
  );
};

export default SignIn;
