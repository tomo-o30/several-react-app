import Signout from "../Signout";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  CollectionReference,
} from "firebase/firestore";

type Message = {
  createdAt: { seconds: number; nanoseconds: number };
  text: string;
};

const Line = () => {
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);
  useEffect(() => {
    const getMessages = async () => {
      const q = query(
        collection(db, "messages") as CollectionReference<Message>
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setMessages([doc.data()]);
      });
    };
    getMessages();
  }, []);
  return (
    <>
      <Signout />
      <div>
        {/* {messages ? messages.map(({text}) => {
          <div>
            <div key={id}>{message.text}</div>
          </div>;
        }): } */}
      </div>
    </>
  );
};

export default Line;
