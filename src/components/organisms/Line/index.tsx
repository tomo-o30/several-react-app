import Signout from "../Signout";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";

const Line = () => {
  const [messages, setMessages] = useState();
  useEffect(() => {
    const q = query(collection(db, "messages"));
    //TODO asyncはどこに記載する？
    const querySnapshot = await getDocs(q);

    // const querySnapshot = await getDocs(collection(db, "messages"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  }, []);
  return (
    <>
      <Signout />
    </>
  );
};

export default Line;
