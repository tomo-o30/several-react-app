import React from "react";
import styles from "./SidebarChannel.module.css";

const SidebarChannel = () => {
  return (
    <div className={styles.sidebarChannel}>
      <h4 className={styles.sidebarChannelH4}>
        <span className={styles.sidebarChannelHash}>#</span>Udemy
      </h4>
      <h4 className={styles.sidebarChannelH4}>
        <span className={styles.sidebarChannelHash}>#</span>Udemy
      </h4>
      <h4 className={styles.sidebarChannelH4}>
        <span className={styles.sidebarChannelHash}>#</span>Udemy
      </h4>
    </div>
  );
};

export default SidebarChannel;
