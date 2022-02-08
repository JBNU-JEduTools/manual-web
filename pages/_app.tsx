import { styleJSX } from '../styles/global';
import Head from 'next/head';
import { AksaraProvider, theme } from '@aksara-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <AksaraProvider disableInjection>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content={theme.colors.blue06} />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content={theme.colors.blue06} />
        <meta name="publisher" content="PT. YesBoss Group Indonesia" />
        <meta name="author" content="Kata AI Tech Team" />
      </Head>
      <Component {...pageProps} />
      <style jsx>{styleJSX}</style>
    </AksaraProvider>
  );
}
