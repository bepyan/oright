import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import ArrowRight from '@/components/icons/ArrowRight';
import RefreshIcon from '@/components/icons/RefreshIcon';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import ParkPointer from '@/components/ParkPointer';
import { parkList, 제자들 } from '@/contants/park';
import { $ } from '@/utils/core';

export default function HomePage() {
  return (
    <Layout>
      <KakaoMap />

      <div className="h-[40%] overflow-y-scroll border-t border-[#e2e2e2] bg-white">
        {parkList.map((item, i) => (
          <ParkItem key={i} item={item} />
        ))}
      </div>
    </Layout>
  );
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const router = useRouter();

  useEffect(() => {
    const $script = document.createElement('script');
    $script.async = true;
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`;
    document.head.appendChild($script);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const centerPosition = new window.kakao.maps.LatLng(제자들.latitude, 제자들.longitude);
        const map = new window.kakao.maps.Map(document.getElementById('map'), {
          center: centerPosition,
          level: 3,
        });
        const 제자들Marker = new window.kakao.maps.Marker({ position: centerPosition });
        제자들Marker.setMap(map);

        parkList.forEach((item) => {
          const content = ParkPointer({
            item,
            onClick: () => router.push(`/${item.id}`),
          });
          const position = new window.kakao.maps.LatLng(item.latitude, item.longitude);
          new window.kakao.maps.CustomOverlay({
            map,
            content,
            position,
            clickable: true,
          });
        });
      });
    };

    $script.addEventListener('load', onLoadKakaoMap);
    return () => {
      $script.removeEventListener('load', onLoadKakaoMap);
    };
  }, []);

  return (
    <div className="relative h-[60%]">
      <div id="map" className="h-full w-full" />
      <button
        className={$(
          'absolute bottom-8 right-4 z-50 flex h-11 w-11 items-center justify-center',
          'rounded-full border border-[#e2e2e2] bg-white shadow',
          'transition-all active:opacity-80',
        )}
      >
        <RefreshIcon />
      </button>
    </div>
  );
};

const ParkItem = ({ item }: { item: any }) => {
  const router = useRouter();

  const onClickFindWay = () => {
    router.push(`/${item.id}`);
  };

  return (
    <div
      className={$('relative cursor-pointer p-5', 'transition-all active:bg-blue-50')}
      onClick={onClickFindWay}
    >
      <div className="text-lg font-bold">{item.title}</div>

      <div className="mt-[10px] flex flex-col gap-1">
        {item.meta && (
          <div className="flex items-center gap-1.5 text-sm">
            <span
              className={$('font-bold', item.meta.remain > 0 ? 'text-[#0C79FE]' : 'text-[#697483]')}
            >
              {item.meta.remain}대 여유
            </span>
            <Separator />
            <span className="text-[#697483]">{item.meta.total}대 전체</span>
          </div>
        )}
        <div className="text-sm text-[#697483]">{item.location}</div>
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
