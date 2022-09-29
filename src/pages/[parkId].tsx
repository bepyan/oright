import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import ArrowBack from '@/components/icons/ArrowBack';
import ClockIcon from '@/components/icons/ClockIcon';
import FileIcon from '@/components/icons/FileIcon';
import LoadingIcon from '@/components/icons/LoadingIcon';
import LocaltionIcon from '@/components/icons/LocationIcon';
import MoneyIcon from '@/components/icons/MoneyIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import { PARK_INFO_LIST } from '@/contants/park';
import { TParkCapacityInfo, TParkRealtimeInfo } from '@/types/models';
import { $ } from '@/utils/core';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { parkId } = query;

  const parkItem = PARK_INFO_LIST.find((item) => item.id.toString() === parkId);

  if (!parkItem) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      parkItem,
    },
  };
}

export default function ParkDetailPage({ parkItem }: { parkItem: TParkRealtimeInfo }) {
  const router = useRouter();

  const meta = useSWR<TParkCapacityInfo>(
    parkItem.parking_type !== 'PRIVATE' && `/v1/parkInfoRealTime?id=${parkItem.id}`,
  );

  const navToFindWay = () => {
    window.open(
      `https://map.kakao.com/link/to/${parkItem.parking_name},${parkItem.latitude},${parkItem.longitude}`,
      '_ blank',
    );
  };

  const navToPhoneCall = () => {
    router.push(`tel:${parkItem.tel}`);
  };

  const navToKakaoMap = () => {
    window.open(
      `https://map.kakao.com/link/map/${parkItem.parking_name},${parkItem.latitude},${parkItem.longitude}`,
      '_ blank',
    );
  };

  return (
    <Layout className="">
      <div className="flex px-5 pt-[30px] pb-[10px]">
        <Link href="/">
          <a>
            <ArrowBack className="cursor-pointer transition-all hover:opacity-70" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col pb-5">
        <h1 className="self-center text-2xl font-bold">{parkItem.parking_name}</h1>
        {meta.data && (
          <div className="mx-5 mt-5 flex h-[100px] items-center rounded-lg bg-white">
            <div className="flex-1 text-center font-bold text-[#0C79FE]">
              <div className="text-2xl">
                {meta.isValidating ? <LoadingIcon /> : meta.data.remains}
              </div>
              <div className="text-sm">주차 여유</div>
            </div>
            <Separator height={40} />
            <div className="flex-1 text-center font-bold text-[#697483]">
              <div className="text-2xl">
                {meta.isValidating ? <LoadingIcon /> : meta.data.capacity}
              </div>
              <div className="text-sm">전체</div>
            </div>
          </div>
        )}
        <button
          className={$(
            'mx-5 mt-3',
            'rounded-lg bg-blue-500 p-[15px] text-center text-lg font-bold text-white',
            'transition-all active:bg-blue-400',
            !meta.data && 'mt-12',
          )}
          onClick={navToFindWay}
        >
          길찾기
        </button>
      </div>

      <div className="bg-white py-2">
        <div className="flex items-center py-2 px-5">
          <PhoneIcon />
          <div className="ml-2 text-sm">{parkItem.tel}</div>
          <div className="ml-auto">
            <button
              className={$(
                'h-[34px] w-[86px] bg-white text-xs font-bold text-[#0C79FE]',
                'rounded-full border border-[#0C79FE]',
                'transition-all active:text-opacity-50',
              )}
              onClick={navToPhoneCall}
            >
              전화하기
            </button>
          </div>
        </div>

        <div className="flex items-center py-2 px-5">
          <LocaltionIcon />
          <div className="ml-2 text-sm">{parkItem.old_address}</div>
          <div className="ml-auto">
            <button
              className={$(
                'h-[34px] w-[86px] bg-white text-xs font-bold text-[#0C79FE]',
                'rounded-full border border-[#0C79FE]',
                'transition-all active:text-opacity-50',
              )}
              onClick={navToKakaoMap}
            >
              카카오맵
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-white px-5 pt-1 pb-6">
        <div className="space:border-t space:border-[#e2e2e2]">
          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <MoneyIcon />
              <div className="text-base font-bold">요금 정보</div>
            </div>
            {!parkItem.payment ? (
              <div>
                <div className="flex items-center text-sm">
                  <div className=""></div>
                  <div className="ml-auto">무료</div>
                </div>
              </div>
            ) : (
              <div className=" flex flex-col gap-2">
                <div className="flex items-center text-sm">
                  <div className="">기본 요금(시간)</div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span>{parkItem.payment.rates}원</span>
                    <Separator />
                    <span>{parkItem.payment.time_rate}분</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <div className="">추가 요금(시간)</div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span>{parkItem.payment.add_rates}원</span>
                    <Separator />
                    <span>{parkItem.payment.add_time_rate}분</span>
                  </div>
                </div>
                {/* <div className="flex items-center text-sm">
                <div className="">정기권 요금</div>
                <div className="ml-auto">60,000원</div>
              </div> */}
              </div>
            )}
          </div>

          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <ClockIcon />
              <div className="text-base font-bold">운영 정보</div>
            </div>
            <div className=" flex flex-col gap-2">
              {parkItem.hasWeekday && (
                <div className="flex items-center text-sm">
                  <div className="">평일</div>
                  <div className="ml-auto">24시간</div>
                </div>
              )}
              {parkItem.hasSaturday && (
                <div className="flex items-center text-sm">
                  <div className="">토요일</div>
                  <div className="ml-auto">24시간</div>
                </div>
              )}

              {parkItem.hasSunday && (
                <div className="flex items-center text-sm">
                  <div className="">일요일</div>
                  <div className="ml-auto">24시간</div>
                </div>
              )}
              {parkItem.hasHoliday && (
                <div className="flex items-center text-sm">
                  <div className="">공휴일</div>
                  <div className="ml-auto">24시간</div>
                </div>
              )}
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <FileIcon />
              <div className="text-base font-bold">기타 정보</div>
            </div>
            <pre className="font-sans text-sm leading-[22px]">{parkItem.info}</pre>
          </div>
        </div>
      </div>
    </Layout>
  );
}
