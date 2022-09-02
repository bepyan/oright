import { useRouter } from 'next/router';

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
    router.push('/');
  };

  return (
    <div className={$('relative p-5', 'transition-all hover:bg-blue-50')}>
      <div className="text-lg font-bold">마천1동 공영공동주차장</div>
      <div className="flex gap-1.5 text-sm">
        <span className="font-bold text-teal-500">{32}대 예약</span>
        <span className="font-bold text-blue-500">{117}대 여유</span>
        <span className="text-gray-500">{217}대 전체</span>
      </div>
      <div className="text-sm text-gray-500">서울 송파구 마천동 215-0</div>

      <div className="absolute top-4 right-5">
        <button
          className={$(
            'h-[34px] w-20 rounded-full bg-blue-500 text-center text-xs font-bold text-white',
            'transition-all active:bg-blue-400',
          )}
          onClick={onClickFindWay}
        >
          길찾기
        </button>
      </div>
    </div>
  );
};
