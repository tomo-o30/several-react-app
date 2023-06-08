import Chat from "../../components/organisms/Chat/chat";
import Sidebar from "../../components/organisms/Sidebar/sidebar";
import styles from "./discord.module.scss";
import SignIn from "../../components/organisms/SignIn";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { login, logout } from "../../redux/features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../utils/ErrorFallBack";

const DiscodeClone = () => {
  const user = useAppSelector((state) => state.user.user);
  // console.log("aaaa", user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className={styles.discordCloneApp}>
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {/* {sidebar} */}
            <Sidebar />
          </ErrorBoundary>
          {/* {discordContent} */}
          <Chat />
        </>
      ) : (
        <>
          <SignIn />
        </>
      )}
    </div>
  );
};

export default DiscodeClone;
