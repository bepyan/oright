import { useRouter } from 'next/router';

import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import { $ } from '@/utils/core';

export default function HomePage() {
  return (
    <Layout>
      <div className="">
        <div className="bg-gray-100"></div>
      </div>

      <div className="">
        {[...Array(5)].map((_, i) => (
          <ParkItem key={i} />
        ))}
      </div>
    </Layout>
  );
}

const ParkItem = () => {
  const router = useRouter();

  const onClickFindWay = () => {
    router.push('/마천1동');
  };

  return (
    <div className={$('relative p-5', 'transition-all hover:bg-blue-50')}>
      <div className="text-lg font-bold">마천1동 공영공동주차장</div>

      <div className="mt-[10px] flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-bold text-[#0AB5CF]">{32}대 예약</span>
          <Separator />
          <span className="font-bold text-[#0C79FE]">{117}대 여유</span>
          <Separator />
          <span className="text-[#697483]">{217}대 전체</span>
        </div>
        <div className="text-sm text-[#697483]">서울 송파구 마천동 215-0</div>
      </div>

      <div className="absolute top-4 right-5">
        <button
          className={$(
            'h-[34px] w-20 rounded-full bg-[#0C79FE] text-center text-xs font-bold text-white',
            'transition-all active:bg-[#0C79FE90]',
          )}
          onClick={onClickFindWay}
        >
          길찾기
        </button>
      </div>
    </div>
  );
};
