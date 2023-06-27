import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Sol Maldonado - Full Stack Developer con fuerte orientación al Frontend graduada del bootcamp Henry"
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
