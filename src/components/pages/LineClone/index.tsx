import SignIn from "../../organisms/SignIn";
//import { useAuthState } from "react-firebase-hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import Line from "../../organisms/Line";

const LineClone = () => {
  const [user] = useAuthState(auth);
  return <>{user ? <Line /> : <SignIn />}</>;
};

export default LineClone;
