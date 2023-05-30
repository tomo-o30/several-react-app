import Chat from "../../components/organisms/Chat/chat";
import Sidebar from "../../components/organisms/Sidebar/sidebar";
import styles from "./discord.module.scss";
import SignIn from "../../components/organisms/SignIn";
import { useAppSelector } from "../../app/hooks";

const DiscodeClone = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className={styles.discordCloneApp}>
      {user ? (
        <>
          {/* {sidebar} */}
          <Sidebar />
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
