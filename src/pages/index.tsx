import { useRouter } from 'next/router';
import React from 'react';

import ArrowRight from '@/components/icons/ArrowRight';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import { $ } from '@/utils/core';

export default function HomePage() {
  return (
    <Layout>
      <div className="relative h-[60%] bg-[url('/map.png')] bg-cover bg-no-repeat">
        <ParkPointer status="hightlight" className="top-12 left-12">
          {117}대 보유
        </ParkPointer>
        <ParkPointer status="nomal" className="top-[24%] left-24">
          {26}대 보유
        </ParkPointer>
        <ParkPointer status="disabled" className="top-24 left-12">
          {0}대 보유
        </ParkPointer>

        <ParkPointer status="nomal" className="top-24 left-24">
          P
        </ParkPointer>
      </div>

      <div className="h-[40%] overflow-y-scroll border-t border-[#e2e2e2] bg-white">
        {[...Array(5)].map((_, i) => (
          <ParkItem key={i} />
        ))}
      </div>
    </Layout>
  );
}

type TParkPointerStatus = 'hightlight' | 'nomal' | 'disabled';

interface ParkPointerProps {
  className?: string;
  status: TParkPointerStatus;
  children?: React.ReactNode;
}

const ParkPointer = ({ className, status, children }: ParkPointerProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${children?.toString()}`);
  };

  return (
    <div className={$('absolute flex flex-col', className)}>
      <button
        onClick={onClick}
        disabled={status === 'disabled'}
        className={$(
          'rounded-lg border-2 px-3 py-2 text-center font-bold',
          'transition-all active:opacity-90',
          status === 'hightlight'
            ? 'border-[#0C79FE] bg-[#0C79FE] text-white'
            : status === 'nomal'
            ? 'border-[#66707C] bg-white'
            : 'border-[#999999] bg-[#dcdcdc] text-[#777777]',
        )}
      >
        {children}
      </button>
      <svg
        width="6"
        height="20"
        viewBox="0 0 6 20"
        fill={status === 'hightlight' ? '#0C79FE' : status === 'nomal' ? '#66707C' : '#999999'}
        xmlns="http://www.w3.org/2000/svg"
        className="self-center"
      >
        <rect x="2" width="2" height="16" />
        <circle cx="3" cy="17" r="3" />
      </svg>
    </div>
  );
};

const ParkItem = () => {
  const router = useRouter();

  const onClickFindWay = () => {
    router.push('/마천1동');
  };

  return (
    <div className={$('relative p-5', 'transition-all active:bg-blue-50')} onClick={onClickFindWay}>
      <div className="text-lg font-bold">마천1동 공영공동주차장</div>

      <div className="mt-[10px] flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-bold text-[#0C79FE]">{117}대 여유</span>
          <Separator />
          <span className="text-[#697483]">{217}대 전체</span>
        </div>
        <div className="text-sm text-[#697483]">서울 송파구 마천동 215-0</div>
      </div>

      <div className="absolute top-5 right-5">
        <button
          className={$(
            'flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0C79FE]',
            'transition-all active:bg-[#0C79FE90]',
          )}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
