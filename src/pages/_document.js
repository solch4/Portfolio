import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta
          name="description"
          content="Sol Maldonado - Front End Developer"
        />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
