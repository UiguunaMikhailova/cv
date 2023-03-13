import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";

const primaryFont = Poppins({
  weight: ['200', '300', '400', '500'],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={primaryFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
