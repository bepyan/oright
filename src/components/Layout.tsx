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
    <main className={$('h-full w-screen bg-[#f2f4f6]')}>
      <Head>
        <title>{ogTitle}</title>
        <meta property="og:title" key="title" content={ogTitle} />
        <meta property="og:description" key="description" content={''} />
        <meta property="og:image" key="image" content={''} />
      </Head>

      <div className={$('relative mx-auto h-full w-full max-w-md', className)}>{children}</div>
    </main>
  );
}
