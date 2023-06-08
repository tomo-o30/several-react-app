import React from "react";
import styles from "./SidebarChannel.module.css";
import { DocumentData } from "firebase/firestore";
import { useAppDispatch } from "../../../app/hooks";
import { setChannelInfo } from "../../../redux/features/channelSlice";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (props: Props) => {
  const dispatch = useAppDispatch();

  const { id, channel } = props;
  return (
    <div
      className={styles.sidebarChannel}
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4 className={styles.sidebarChannelH4}>
        <span className={styles.sidebarChannelHash}>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
