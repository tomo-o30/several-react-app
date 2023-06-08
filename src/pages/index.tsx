import Link from "next/link";
import useSWR from "swr";
import fetch from "../libs/fetch";

const Home = () => {
  const { data, error } = useSWR("/api/data", fetch);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <p>{data.message}</p>
      <div>
        <Link href="materialUi">material ui icon利用サンプル一覧</Link>
      </div>
      <div>
        <Link href="todo">todoTask</Link>
      </div>
      <div>
        <Link href="line">lineClone</Link>
      </div>
      <div>
        <Link href="nextblog">nextBlog</Link>
        <Link href="discord">discodeClone</Link>
      </div>
    </>
  );
};

export default Home;
