import Signout from "../Signout";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";

const Line = () => {
  const [messages, setMessages] = useState();
  useEffect(() => {
    const getMessages = async () => {
      const q = query(collection(db, "messages"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setMessages(doc.data());
      });
    };
    getMessages();
  }, []);
  return (
    <>
      {console.log(messages)}
      <Signout />
      <div>
        {/* {messages.map((message) => {
          <div>
            <div key={message.id}>{message}</div>
          </div>;
        })} */}
      </div>
    </>
  );
};

export default Line;
