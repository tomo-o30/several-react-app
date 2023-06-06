import React from "react";
import styles from "./chatHeader.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

type Props = {
  channelName: string | null;
};

const chatHeader = (props: Props) => {
  const { channelName } = props;
  return (
    <div className={styles.chatHeader}>
      <div className={styles.chatHeaderLeft}>
        <h3 className={styles.chatHeaderH3}>
          <span className={styles.chatHeaderHash}>#</span>
          {channelName}
        </h3>
      </div>
      <div className={styles.chatHeaderRight}>
        <NotificationsIcon className={styles.MuiSvgIconRoot} />
        <PushPinIcon className={styles.MuiSvgIconRoot} />
        <PeopleAltIcon className={styles.MuiSvgIconRoot} />
        <div className={styles.chatHeaderSearch}>
          <input
            className={styles.chatHeaderInput}
            type="text"
            placeholder="検索"
          />
          <SearchIcon className={styles.MuiSvgIconRoot} />
        </div>
        <SendIcon className={styles.MuiSvgIconRoot} />
        <HelpIcon className={styles.MuiSvgIconRoot} />
      </div>
    </div>
  );
};

export default chatHeader;
