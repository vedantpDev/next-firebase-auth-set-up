import "@/styles/globals.css";
import initAuth from "../utils/initAuth";

initAuth();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
