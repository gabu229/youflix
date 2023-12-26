import Navbar from "@cp/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1" />
        <title>YouFlix - Home of Movies</title>
      </Head>
      <main className=" bg-black/30 backdrop-blur-[4px] ">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
