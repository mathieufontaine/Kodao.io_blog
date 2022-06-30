import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/button.css";
import "../styles/section.css";
import "../styles/card.css";
import "../styles/blog.css";
import "../styles/hero.css";
import "../styles/article.css";
import "../styles/form.css";
import "../styles/mobile.css";
import "../styles/footer.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
