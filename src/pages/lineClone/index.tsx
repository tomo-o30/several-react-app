import SignIn from "../../components/organisms/Signin/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Line from "../../components/organisms/Line/Line";

const LineClone = () => {
  const [user] = useAuthState(auth);
  return <>{user ? <Line /> : <SignIn />}</>;
};

export default LineClone;
