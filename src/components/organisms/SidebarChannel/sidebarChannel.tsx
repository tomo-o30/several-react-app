import React from "react";
import styles from "./SidebarChannel.module.css";
import { DocumentData } from "firebase/firestore";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;
  return (
    <div className={styles.sidebarChannel}>
      <h4 className={styles.sidebarChannelH4}>
        <span className={styles.sidebarChannelHash}>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
