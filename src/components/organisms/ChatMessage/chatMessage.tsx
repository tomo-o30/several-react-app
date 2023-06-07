import React from "react";
import styles from "./chatMessage.module.scss";
import { Timestamp } from "firebase/firestore";
import { Avatar } from "@mui/material";

interface Props {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const chatMessage = (props: Props) => {
  const { message, timestamp, user } = props;
  return (
    <div className={styles.message}>
      <Avatar src={user?.photo} />
      <div className={styles.messageInfo}>
        <h4>
          {user?.displayName}
          <span className={styles.messageTimestamp}>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default chatMessage;
