import { TParkInfo } from '@/types/models';

export const 제자들 = {
  latitude: 37.4964504992276,
  longitude: 127.157167007562967,
};

export const PARK_INFO_LIST: TParkInfo[] = [
  {
    id: '1588964',
    kakao_id: '1363738607',
    parking_name: '마천동 1공영주차장',
    parking_type: 'NW',
    tel: '02-404-6275',
    old_address: '송파구 마천동 215-0',
    latitude: 37.49528691901275,
    longitude: 127.15556077987078,
    info: '주차장 운영시간 및 요금정보는 실제와 다를 수 있으며,\n현장 확인 후 이용바랍니다.\n*월정기권 요금안내\n(주간35,000원, 야간25,000원)',
    capacity: 217,

    payment: {
      rates: 50,
      time_rate: 5,
      add_rates: 50,
      add_time_rate: 5,
      full_time_monthly: '60000',
    },

    hasWeekday: true,
    hasSaturday: true,
    hasSunday: true,
    hasHoliday: true,
  },
  {
    id: '173821',
    kakao_id: '20515890',
    parking_name: '마천동 2공영주차장',
    parking_type: 'NW',
    tel: '02-407-4947',
    old_address: '송파구 마천동 364-5',
    latitude: 37.49436437,
    longitude: 127.1561092,
    info: '주차장 운영시간 및 요금정보는 실제와 다를 수 있으며,\n현장 확인 후 이용바랍니다.\n*월정기권 요금안내\n(주간35,000원, 야간25,000원)',
    capacity: 116,

    payment: {
      rates: 50,
      time_rate: 5,
      add_rates: 50,
      add_time_rate: 5,
      full_time_monthly: '60000',
    },

    hasWeekday: true,
    hasSaturday: true,
    hasSunday: true,
    hasHoliday: true,
  },
  {
    id: '1441362',
    kakao_id: '20587445',
    parking_name: '천마 공영주차장',
    parking_type: 'NW',
    tel: '02-407-4947',
    old_address: '송파구 마천동 364-5',
    latitude: 37.500313,
    longitude: 127.154959,
    info: '주차장 운영시간 및 요금정보는 실제와 다를 수 있으며,\n현장 확인 후 이용바랍니다.\n*월정기권 요금안내\n(주간35,000원, 야간25,000원)',
    capacity: 140,

    payment: {
      rates: 50,
      time_rate: 5,
      add_rates: 50,
      add_time_rate: 5,
      full_time_monthly: '60000',
    },

    hasWeekday: true,
    hasSaturday: true,
    hasSunday: true,
    hasHoliday: true,
  },
  {
    id: '1237',
    parking_name: '로드윈 주차장(회차용)',
    parking_type: 'PRIVATE',
    tel: '02-488-9777',
    old_address: '경기도 하남시 감이동 358',
    latitude: 37.494216764872,
    longitude: 127.15618363796,
    info: '단기주차전용\n노약자, 여성, 초등부이하 자녀 수반 차량을 위한 주차장입니다.\n자세한 문의는 02-488-9777로 전화주세요.',

    hasWeekday: false,
    hasSaturday: false,
    hasSunday: true,
    hasHoliday: false,
  },
  {
    id: '1238',
    parking_name: '마천동교회 주차장',
    parking_type: 'PRIVATE',
    tel: '02-488-9777',
    old_address: '서울특별시 송파구 마천동 237-1',
    latitude: 37.484216764872,
    longitude: 127.15718363796,
    info: '예약제로 운영하는 주차장입니다.\n제자들 링크를 통해 예약을 하시고 주차부탁드립니다.\n자세한 문의는 02-488-9777로 전화주세요.',

    hasWeekday: false,
    hasSaturday: false,
    hasSunday: true,
    hasHoliday: false,
  },
];
