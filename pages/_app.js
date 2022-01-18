import { styleJSX } from '../styles/global.ts';
import { AksaraProvider } from '@aksara-ui/react';
import { AksaraReset } from 'components/foundations';

export default function MyApp({ Component, pageProps }) {
  return (
    <AksaraReset>
      <AksaraProvider disableInjection>
        <Component {...pageProps} />
        <style jsx>
          {styleJSX}
        </style>
      </AksaraProvider>
    </AksaraReset>
  )

}
