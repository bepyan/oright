import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import ArrowRight from '@/components/icons/ArrowRight';
import RefreshIcon from '@/components/icons/RefreshIcon';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import ParkPointer from '@/components/ParkPointer';
import { parkList, 제자들 } from '@/contants/park';
import { $ } from '@/utils/core';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function HomePage() {
  const router = useRouter();
  const [kmap, setKmap] = useState<any>();
  const [focusedItem, setFocusedItem] = useState<any>();

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
        new window.kakao.maps.Marker({ position: centerPosition, map });

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
          });
        });

        setKmap(map);
      });
    };

    $script.addEventListener('load', onLoadKakaoMap);
    return () => {
      $script.removeEventListener('load', onLoadKakaoMap);
    };
  }, []);

  const onFocuseItem = (item: any) => {
    var moveLatLon = new window.kakao.maps.LatLng(item.latitude, item.longitude);
    kmap.panTo(moveLatLon);
    setFocusedItem(item);
  };

  const navToDetailParkItem = (id: number | string) => {
    router.push(`/${id}`);
  };

  return (
    <Layout>
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

      <div className="h-[40%] overflow-y-scroll border-t border-[#e2e2e2] bg-white">
        {parkList.map((item, i) => (
          <ParkItem
            key={i}
            item={item}
            isSelected={focusedItem?.id === item.id}
            onClick={() => onFocuseItem(item)}
            onClickFindWay={() => navToDetailParkItem(item.id)}
          />
        ))}
      </div>
    </Layout>
  );
}

const ParkItem = ({
  item,
  isSelected,
  onClick,
  onClickFindWay,
}: {
  item: any;
  isSelected?: boolean;
  onClick: () => void;
  onClickFindWay: () => void;
}) => {
  return (
    <div
      className={$(
        'relative cursor-pointer p-5',
        'transition-all active:bg-[#0C79FE] active:bg-opacity-[0.02]',
        isSelected && 'bg-[#0C79FE] bg-opacity-5',
      )}
      onClick={onClick}
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
          onClick={(e) => {
            e.stopPropagation();
            onClickFindWay();
          }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
