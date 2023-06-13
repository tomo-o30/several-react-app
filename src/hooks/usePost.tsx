import React, { useEffect, useState } from "react";
import config from "../env.js";

type Post = {
  id: string;
  title: string;
};

const useUser = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(config.jsonplaceholderPosts);
      const users = await response.json();
      setPosts(users);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default useUser;
