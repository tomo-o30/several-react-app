import React from "react";
import styles from "./chatHeader.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

const chatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.chatLeft}></div>
      <div className={styles.chatRight}>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className={styles.chatHeaderSearch}>
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default chatHeader;
