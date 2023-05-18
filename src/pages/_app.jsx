import GoogleAnalytics from "@/common/components/GoogleAnalytics";
import "@/styles/styles.scss";
import { Heebo, IBM_Plex_Sans } from "next/font/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
