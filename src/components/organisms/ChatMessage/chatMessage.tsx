import React from "react";
import styles from "./chatMessage.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const chatMessage = () => {
  return (
    <div className={styles.message}>
      <AccountCircleIcon />
      <div className={styles.messageInfo}>
        <h4>
          shin code
          <span className={styles.messageTimestamp}>2022/12/18</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default chatMessage;
