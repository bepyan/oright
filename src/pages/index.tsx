import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import ArrowRight from '@/components/icons/ArrowRight';
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
        {[...Array(5)].map((_, i) => (
          <ParkItem key={i} />
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
            title: item.title,
            status: 'hightlight',
          });
          const position = new window.kakao.maps.LatLng(item.latitude, item.longitude);
          const customOverlay = new window.kakao.maps.CustomOverlay({
            content,
            position,
          });
          customOverlay.setMap(map);
        });
      });
    };

    $script.addEventListener('load', onLoadKakaoMap);
    return () => {
      $script.removeEventListener('load', onLoadKakaoMap);
    };
  }, []);

  return <div id="map" className="relative h-[60%]" />;
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
