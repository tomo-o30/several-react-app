import { AppProps } from "next/app";
import Head from "next/head";
// 全体にかけるCSS
import "./global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>to-do-app</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
