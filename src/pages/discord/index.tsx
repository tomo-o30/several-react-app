import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { login, logout } from "../../redux/features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../utils/ErrorFallBack";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import Chat from "../../components/organisms/Chat/Chat";
import SignIn from "../../components/organisms/Signin/Signin";

const DiscodeClone = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
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
