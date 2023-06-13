import React, { useEffect, useState } from "react";
import config from "../../src/env.js";

type User = {
  id: string;
  name: string;
};

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(config.jsonplaceholderUsers);
      const users = await response.json();
      setUsers(users);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>ユーザ一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default useUser;
