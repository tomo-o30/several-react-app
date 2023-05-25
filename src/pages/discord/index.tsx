import Chat from "../../components/organisms/Chat/chat";
import Sidebar from "../../components/organisms/Sidebar/sidebar";
import styles from "./discord.module.scss";

const DiscodeClone = () => {
  return (
    <div className={styles.discordCloneApp}>
      {/* {sidebar} */}
      <Sidebar />
      {/* {discordContent} */}
      <Chat />
    </div>
  );
};

export default DiscodeClone;
