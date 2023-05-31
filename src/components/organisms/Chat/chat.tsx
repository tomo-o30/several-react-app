import React from "react";
import styles from "./chat.module.scss";
import ChatHeader from "../../molecules/ChatHeader/chatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GifIcon from "@mui/icons-material/Gif";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "../ChatMessage/chatMessage";

const chat = () => {
  return (
    <div className={styles.chat}>
      {/* {chatHeader} */}
      <ChatHeader />
      {/* {chatMessage} */}
      <div className={styles.chatMessage}>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* {chatInput} */}
      <div className={styles.chatInput}>
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="#Udemyに送信" />
          <button type="submit" className={styles.chatInputButton}>
            送信
          </button>
        </form>
        <div className={styles.chatInputIcons}>
          <CardGiftcardIcon className={styles.MuiSvgIconRoot} />
          <GifIcon className={styles.MuiSvgIconRoot} />
          <EmojiEmotionsIcon className={styles.MuiSvgIconRoot} />
        </div>
      </div>
    </div>
  );
};

export default chat;
