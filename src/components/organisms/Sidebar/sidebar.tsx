import React from "react";
import styles from "./sidebar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import SidebarChannel from "../SidebarChannel/sidebarChannel";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* {sidebarLeft} */}
      <div className={styles.sidebarLeft}>
        <div className={styles.serverIcon}>
          <img src="./react_logo.png" alt="" />
        </div>
        <div className={styles.serverIcon}>
          <img src="./react_logo.png" alt="" />
        </div>
      </div>
      {/* {sidebarRight} */}
      <div className={styles.sidebarRight}>
        <div className={styles.sidebarTop}>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* {sidebarChannel} */}
        <div className={styles.sidebarChannels}>
          <div className={styles.sidebarChannelsHeader}>
            <div className={styles.sidebarHeader}>
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className={styles.sidebarAddIcon} />
          </div>
          <div className={styles.idebarChannelList}>
            <SidebarChannel />
          </div>
          <div className={styles.sidebarFooter}>
            <div className={styles.sidebarAccount}>
              <img src="./icon.png" alt="" />
              <div className={styles.accountName}>
                <h4 className={styles.h4}>ああああ</h4>
                <span className={styles.span}>いいいい</span>
              </div>
            </div>
            <div className={styles.sidebarVoice}>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
