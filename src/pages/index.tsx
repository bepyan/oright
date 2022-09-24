import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import React, { useEffect, useMemo, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import ArrowRight from '@/components/icons/ArrowRight';
import RefreshIcon from '@/components/icons/RefreshIcon';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import ParkPointer from '@/components/ParkPointer';
import { PARK_INFO_LIST, 제자들 } from '@/contants/park';
import { TParkCapacityInfo, TParkInfo, TParkRealtimeInfo } from '@/types/models';
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

  const swr = useSWRConfig();
  const parkInfoMeta = useSWR<TParkInfo[]>('/v1/parkInfoMetadataAll');
  const parkInfoReal = useSWR<TParkCapacityInfo[]>('/v1/parkInfoRealTimeAll');

  const onRefresh = () => {
    swr.mutate('/v1/parkInfoRealTimeAll');
  };

  const parkRealInfoList: TParkRealtimeInfo[] = useMemo(() => {
    if (!parkInfoMeta.data || !parkInfoReal.data) {
      return [...PARK_INFO_LIST];
    }

    const parkInfoList: TParkInfo[] = parkInfoMeta.data.map((info) => {
      const realInfo = parkInfoReal.data?.find((realInfo) => realInfo.id === info.id);
      return { ...info, meta: realInfo };
    });

    return [...PARK_INFO_LIST, ...parkInfoList];
  }, [parkInfoMeta.data, parkInfoReal.data]);

  useEffect(() => {
    if (parkInfoMeta.isValidating || parkInfoReal.isValidating) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [parkInfoMeta.isValidating, parkInfoReal.isValidating]);

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

        PARK_INFO_LIST.forEach((item) => {
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
    const moveLatLon = new window.kakao.maps.LatLng(item.latitude, item.longitude);
    kmap.panTo(moveLatLon);

    let retry = 0;
    setFocusedItem(item);

    const highlight = () => {
      const $highlightList = document.querySelectorAll('.park-pointer--hightlight');
      $highlightList.forEach(($item) => $item.classList.remove('park-pointer--hightlight'));

      const $target = document.getElementById(`park-pointer-${item.id}`);
      if ($target) {
        $target.classList.add('park-pointer--hightlight');
      } else if (retry < 5) {
        retry++;
        setTimeout(highlight, 300);
      }
    };

    highlight();
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
          onClick={onRefresh}
        >
          <RefreshIcon />
        </button>
      </div>

      <div className="h-[40%] overflow-y-scroll border-t border-[#e2e2e2] bg-white">
        {PARK_INFO_LIST.map((item) => (
          <ParkItem
            key={item.id}
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
  item: TParkRealtimeInfo;
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
      <div className="text-lg font-bold">{item.parking_name}</div>

      <div className="mt-[10px] flex flex-col gap-1">
        {item.meta && (
          <div className="flex items-center gap-1.5 text-sm">
            <span
              className={$(
                'font-bold',
                item.meta.remains > 0 ? 'text-[#0C79FE]' : 'text-[#697483]',
              )}
            >
              {item.meta.remains}대 여유
            </span>
            <Separator />
            <span className="text-[#697483]">{item.meta.capacity}대 전체</span>
          </div>
        )}
        <div className="text-sm text-[#697483]">{item.old_address}</div>
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
