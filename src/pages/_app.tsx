import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import _axios from '@/utils/_axios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => _axios.get(url).then((res) => res.data),
      }}
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" key="type" content="website" />
        <meta property="og:site_name" key="site_name" content="oright" />
        <meta property="og:locale" key="locale" content="ko_KR" />
      </Head>

      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
