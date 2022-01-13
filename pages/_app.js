import { styleJSX } from '../styles/global.ts';
import { AksaraProvider } from '@aksara-ui/react';
import { AksaraReset } from 'components/foundations';
import { MDXProvider } from '@mdx-js/react'

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
