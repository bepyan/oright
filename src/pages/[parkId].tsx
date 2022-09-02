import Link from 'next/link';

import ArrowBack from '@/components/icons/ArrowBack';
import LocaltionIcon from '@/components/icons/LocationIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import Separator from '@/components/icons/Separator';
import Layout from '@/components/Layout';
import { $ } from '@/utils/core';

export default function ParkDetailPage() {
  return (
    <Layout className="">
      <div className="flex px-5 pt-[30px] pb-[10px]">
        <Link href="/">
          <a>
            <ArrowBack className="cursor-pointer" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col pb-5">
        <h1 className="self-center text-2xl font-bold">마천1동 공영공동주차장</h1>
        <div className="mx-5 mt-5 flex h-[100px] items-center rounded-lg bg-white">
          <div className="flex-1 text-center font-bold text-[#0AB5CF]">
            <div className="text-2xl">{32}</div>
            <div className="text-sm">주차 예약</div>
          </div>
          <Separator height={40} />
          <div className="flex-1 text-center font-bold text-[#0C79FE]">
            <div className="text-2xl">{117}</div>
            <div className="text-sm">주차 가능</div>
          </div>
          <Separator height={40} />
          <div className="flex-1 text-center font-bold text-[#697483]">
            <div className="text-2xl">{217}</div>
            <div className="text-sm">전체</div>
          </div>
        </div>
        <button
          className={$(
            'mx-5 mt-3',
            'rounded-lg bg-blue-500 p-[15px] text-center text-lg font-bold text-white',
            'transition-all active:bg-blue-400',
          )}
        >
          길찾기
        </button>
      </div>

      <div className="bg-white py-2">
        <div className="flex items-center py-2 px-5">
          <PhoneIcon />
          <div className="ml-2 text-sm">02-430-7240</div>
          <div className="ml-auto">
            <button
              className={$(
                'h-[34px] w-[86px] bg-white text-xs font-bold text-[#0C79FE]',
                'rounded-full border border-[#0C79FE]',
                'transition-all active:text-opacity-50',
              )}
            >
              전화하기
            </button>
          </div>
        </div>

        <div className="flex items-center py-2 px-5">
          <LocaltionIcon />
          <div className="ml-2 text-sm">서울 송파구 마천동 215-0</div>
          <div className="ml-auto">
            <button
              className={$(
                'h-[34px] w-[86px] bg-white text-xs font-bold text-[#0C79FE]',
                'rounded-full border border-[#0C79FE]',
                'transition-all active:text-opacity-50',
              )}
            >
              네이버 지도
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-white p-5">
        <div className="flex flex-col gap-2 rounded-xl bg-[#F9ECEE] p-4 text-sm text-[#C01A34]">
          <span>· 주차 가능이 0일 경우 예약할 수 없습니다.</span>
          <span>· 예약된 주차는 오후 1시가 지나면 모두 해제됩니다.</span>
        </div>

        <div className="mt-[10px]">
          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <div></div>
              <div className="text-base font-bold">요금 정보</div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex items-center text-sm">
                <div className="">기본 요금(시간)</div>
                <div className="ml-auto">50원 | 5분</div>
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4 flex items-center gap-1">
              <div></div>
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
