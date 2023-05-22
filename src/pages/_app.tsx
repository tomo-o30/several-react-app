import { AppProps } from "next/app";
import Head from "next/head";
// 全体にかけるSCSS
import "./app.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <div className="App">
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
    </div>
  </>
);

export default App;
