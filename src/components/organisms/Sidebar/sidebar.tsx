import React from "react";
import styles from "./sidebar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
