import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import 'swiper/css';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Saran Farm</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
