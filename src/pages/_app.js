import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

export function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sol Maldonado - Full Stack Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
