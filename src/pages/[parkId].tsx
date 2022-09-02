import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ArrowBack from '@/components/icons/ArrowBack';
import ClockIcon from '@/components/icons/ClockIcon';
import FileIcon from '@/components/icons/FileIcon';
import LocaltionIcon from '@/components/icons/LocationIcon';
import MoneyIcon from '@/components/icons/MoneyIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import { parkList } from '@/contants/park';
import { $ } from '@/utils/core';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { parkId } = query;

  const parkItem = parkList.find((item) => item.id.toString() === parkId);

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

export default function ParkDetailPage({ parkItem }: any) {
  const router = useRouter();

  const navToFindWay = () => {
    window.open(
      `https://map.kakao.com/link/to/${parkItem.title},${parkItem.latitude},${parkItem.longitude}`,
      '_ blank',
    );
  };

  const navToPhoneCall = () => {
    router.push(`tel:${parkItem.phone}`);
  };

  const navToKakaoMap = () => {
    window.open(
      `https://map.kakao.com/link/map/${parkItem.title},${parkItem.latitude},${parkItem.longitude}`,
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
        <h1 className="self-center text-2xl font-bold">{parkItem.title}</h1>
        {parkItem.meta && (
          <div className="mx-5 mt-5 flex h-[100px] items-center rounded-lg bg-white">
            <div className="flex-1 text-center font-bold text-[#0C79FE]">
              <div className="text-2xl">{parkItem.meta.remain}</div>
              <div className="text-sm">주차 여유</div>
            </div>
            <Separator height={40} />
            <div className="flex-1 text-center font-bold text-[#697483]">
              <div className="text-2xl">{parkItem.meta.total}</div>
              <div className="text-sm">전체</div>
            </div>
          </div>
        )}
        <button
          className={$(
            'mx-5 mt-3',
            'rounded-lg bg-blue-500 p-[15px] text-center text-lg font-bold text-white',
            'transition-all active:bg-blue-400',
            !parkItem.meta && 'mt-12',
          )}
          onClick={navToFindWay}
        >
          길찾기
        </button>
      </div>

      <div className="bg-white py-2">
        <div className="flex items-center py-2 px-5">
          <PhoneIcon />
          <div className="ml-2 text-sm">{parkItem.phone}</div>
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
          <div className="ml-2 text-sm">{parkItem.location}</div>
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
            <div className=" flex flex-col gap-2">
              <div className="flex items-center text-sm">
                <div className="">기본 요금(시간)</div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span>50원</span>
                  <Separator />
                  <span>5분</span>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <div className="">추가 요금(시간)</div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span>50원</span>
                  <Separator />
                  <span>5분</span>
                </div>
              </div>

              <div className="flex items-center text-sm">
                <div className="">정기권 요금</div>
                <div className="ml-auto">60,000원</div>
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <ClockIcon />
              <div className="text-base font-bold">운영 정보</div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex items-center text-sm">
                <div className="">평일</div>
                <div className="ml-auto">24시간</div>
              </div>
              <div className="flex items-center text-sm">
                <div className="">토요일</div>
                <div className="ml-auto">24시간</div>
              </div>
              <div className="flex items-center text-sm">
                <div className="">공휴일</div>
                <div className="ml-auto">24시간</div>
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <FileIcon />
              <div className="text-base font-bold">기타 정보</div>
            </div>
            <div className="text-sm leading-[22px]">
              주차장 운영시간 및 요금정보는 실제와 다를 수 있으며, <br />
              현장 확인 후 이용바랍니다. <br />
              *월정기권 요금안내
              <br />
              (주간35,000원, 야간25,000원)
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
