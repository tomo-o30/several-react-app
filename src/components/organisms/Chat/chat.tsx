import React, { useState } from "react";
import styles from "./chat.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GifIcon from "@mui/icons-material/Gif";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useAppSelector } from "../../../app/hooks";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import useSubCollection from "../../../hooks/useSubCollection";
import ChatHeader from "../../molecules/ChatHeader/ChatHeader";
import ChatMessage from "../ChatMessage/ChatMessage";



const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  const [inputText, setInputText] = useState<string>("");
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //enterを押してもリロードされなくする。
    e.preventDefault();

    //channelsコレクションの中にあるmessageコレクションの中にメッセージ情報を入れる。
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      }
    );
    setInputText("");
  };

  return (
    <div className={styles.chat}>
      {/* {chatHeader} */}
      <ChatHeader channelName={channelName} />
      {/* {chatMessage} */}
      <div className={styles.chatMessage}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
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
            value={inputText}
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
