import SignIn from "../components/organisms/SignIn/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Line from "../components/organisms/Line";

const LineClone = () => {
  const [user] = useAuthState(auth);
  return <>{user ? <Line /> : <SignIn />}</>;
};

export default LineClone;
