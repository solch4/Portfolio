import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

export function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sol Maldonado - Front End Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
