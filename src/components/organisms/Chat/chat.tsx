import React, { useState } from "react";
import styles from "./chat.module.scss";
import ChatHeader from "../../molecules/ChatHeader/chatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GifIcon from "@mui/icons-material/Gif";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "../ChatMessage/chatMessage";
import { useAppSelector } from "../../../app/hooks";

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  const [inputText, setInputText] = useState<string>("");

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    //エンターを押してもリロードされなくする。
    e.preventDefault();
  };

  return (
    <div className={styles.chat}>
      {/* {chatHeader} */}
      <ChatHeader channelName={channelName} />
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
          <input
            type="text"
            placeholder="#Udemyに送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
          />
          <button
            type="submit"
            className={styles.chatInputButton}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => sendMessage(e)}
          >
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

export default Chat;
