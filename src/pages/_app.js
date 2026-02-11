import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Connor Kildare</title>
      <meta name="description" content="Portfolio site for Connor Kildare" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="Connor Kildare, Connor, Kildare, UNL, Conner Kildare, Conner, Portfolio, Portfolio Site, Speedway Motors, Senior Design" />
      <meta name="author" content="Connor Kildare" />
      <link rel="shortcut icon" href="/images/favicon.png" />
      <link rel="icon" href="/images/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
}
