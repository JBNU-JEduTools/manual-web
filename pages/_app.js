import { styleJSX } from '../styles/global.ts';
import { AksaraProvider } from '@aksara-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <AksaraProvider disableInjection>
      <Component {...pageProps} />
      <style jsx>{styleJSX}</style>
    </AksaraProvider>
  );
}
