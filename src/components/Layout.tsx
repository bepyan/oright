import Head from 'next/head';

import { $ } from '@/utils/core';

export interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export default function Layout({ className, children, title }: LayoutProps) {
  const ogTitle = !title ? 'oright' : `${title} | oright`;

  return (
    <main className={$('h-full w-screen')}>
      <Head>
        <title>{ogTitle}</title>
        {/* <meta property="og:url" key="url" content="https://mildvu.vercel.app/" /> */}
        <meta property="og:title" key="title" content={ogTitle} />
        <meta property="og:description" key="description" content={ogTitle} />
        <meta
          property="og:image"
          key="image"
          content="https://firebasestorage.googleapis.com/v0/b/mildvu-14a29.appspot.com/o/images%2Fmildvu.png?alt=media&token=263f7e5c-0d94-45e5-ac76-71d2c32ddb61"
        />
      </Head>

      <div className={$('relative mx-auto w-full max-w-xl', className)}>{children}</div>
    </main>
  );
}
