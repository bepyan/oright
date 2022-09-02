import Head from 'next/head';

import { $ } from '@/utils/core';

export interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export default function Layout({ className, children, title }: LayoutProps) {
  const ogTitle = !title ? '오라이 Oright' : `${title} | 오라이 Oright`;

  return (
    <main className={$('h-full w-full bg-[#f2f4f6]')}>
      <Head>
        <title>{ogTitle}</title>
        <meta property="og:title" key="title" content={ogTitle} />
        <meta
          property="og:description"
          key="description"
          content={'지금 바로 주차 공간을 확인하세요!'}
        />
        <meta
          property="og:image"
          key="image"
          content={
            'https://user-images.githubusercontent.com/65283190/188105441-0bb941e4-af2e-40e2-9f6a-ba33d6426b27.png'
          }
        />
      </Head>

      <div className={$('relative mx-auto h-full w-full max-w-md', className)}>{children}</div>
    </main>
  );
}
