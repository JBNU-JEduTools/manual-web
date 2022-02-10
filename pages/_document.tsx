import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Meta from '../components/meta';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Meta />
        <Head>
          <link rel="stylesheet preload" href="assets/fonts/Inter.woff" as="font" crossOrigin="true" />
          <link rel="stylesheet preload" href="assets/fonts/Inter-Bold.woff" as="font" crossOrigin="true" />
          <link rel="stylesheet preload" href="assets/fonts/SF-Pro-Text.ttf" as="font" crossOrigin="true" />
          <link rel="stylesheet preload" href="assets/fonts/RobotoMono.woff" as="font" crossOrigin="true" />
          <link rel="stylesheet preload" href="assets/fonts/RobotoMono-Bold.woff" as="font" crossOrigin="true" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
