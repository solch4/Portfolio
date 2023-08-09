import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Nunito, Nunito_Sans } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: "800",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunitoSans",
  display: "swap",
  weight: "400",
});

export function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sol Maldonado - Full Stack Developer</title>
      </Head>
      <div
        className={`${nunito.variable} ${nunitoSans.variable} font-nunitoSans gradient text-neutral-700`}
      >
        <Toaster
          reverseOrder={false}
          position="top-center"
          toastOptions={{
            className: `!bg-terciary-50 font-nunitoSans !text-neutral-700 !shadow-md !shadow-neutral-500/20`,
          }}
        />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(App);
