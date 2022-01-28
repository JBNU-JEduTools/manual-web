import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from '../components/meta';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Meta />
        <Head>
          <link rel="stylesheet preload" href="assets/fonts/Inter.woff" as="font" crossOrigin />
          <link rel="stylesheet preload" href="assets/fonts/Inter-Bold.woff" as="font" crossOrigin />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
