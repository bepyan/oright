import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';

import _axios from '@/utils/_axios';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

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

      {/* google adsense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2820184336962070"
        crossOrigin="anonymous"
      />
    </SWRConfig>
  );
}

export default MyApp;
