import React from "react";
import styles from "./chat.module.scss";
import ChatHeader from "../../molecules/ChatHeader/chatHeader";

const chat = () => {
  return (
    <div className={styles.chat}>
      {/* {chatHeader} */}
      <ChatHeader />
      {/* {chatMessage} */}
      <div className={styles.chatMessage}></div>
      {/* {chatInput} */}
      <div className={styles.chatInput}></div>
    </div>
  );
};

export default chat;
