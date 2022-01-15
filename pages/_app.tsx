import type { AppProps } from "next/app";
import "../styles/tailwind.css";
import Header from "components/layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
