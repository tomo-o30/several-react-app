import { AppProps } from "next/app";
import Head from "next/head";
// 全体にかけるSCSS
import "./app.scss";
import { Provider } from "react-redux";
import { store } from "../app/store";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Provider store={store}>
      <div className="App">
        <Head>
          <title>to-do-app</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
            rel="stylesheet"
          />
          {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <Component {...pageProps} />
      </div>
    </Provider>
  </>
);

export default App;
