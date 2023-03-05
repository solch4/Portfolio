import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";

export function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
