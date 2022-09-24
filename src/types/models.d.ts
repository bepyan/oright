export type TParkMetaInfo = {
  id: string; // '1588964'
  kakao_id: string; // '1363738607'
  parking_name: string; // '마천동 1공영주차장(구)'
  old_address: string; // '송파구 마천동 215-0'
  new_address: string; // '송파구 성내천로43길 6'
  parking_type: string; // 'NW'
  parking_type_name: string; // '노외 주차장'
  operation_rule: string; // '1'
  operation_rule_name: string; // '시간제 주차장'
  tel: string; // '02-404-6275'
  capacity: number; // 217
  pay_yn: string; // 'Y'
  pay_name: string; // '유료'
  night_free_open: string; // 'N'
  night_free_open_name: string; // '야간 미개방'
  weekday_begin_time: string; // '0000'
  weekday_end_time: string; // '2400'
  weekend_begin_time: string; // '0000'
  weekend_end_time: string; // '2400'
  holiday_begin_time: string; // '0000'
  holiday_end_time: string; // '2400'
  sync_time: string; // '2020-11-16 11:27:00'
  saturday_pay_yn: string; // 'N'
  saturday_pay_name: string; // '무료'
  holiday_pay_yn: string; // 'N'
  holiday_pay_name: string; // '무료'
  full_time_monthly: string; // '60000'
  grp_park_name: string; // ''
  rates: number; // 50
  time_rate: number; // 5
  add_rates: number; // 50
  add_time_rate: number; // 5
  bus_rates: number; // 0
  bus_time_rate: number; // 0
  bus_add_time_rate: number; // 0
  bus_add_rates: number; // 0
  day_maximum: number; // 0
  latitude: number; // 37.49528691901275
  longitude: number; // 127.15556077987078
};

export type TParkRealInfo = {
  id: string;
  capacity: number;
  remains: number;
  update_time_millis: number;
};

export type TParkInfo = TParkMetaInfo & {
  meta?: TParkRealInfo;
};
