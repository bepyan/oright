export type TParkInfo = {
  id: string;
  kakao_id?: string;
  parking_name: string;
  parking_type: string;
  tel: string;
  old_address: string;
  latitude: number;
  longitude: number;
  info: sring;
  capacity?: number;

  payment?: {
    rates: number;
    time_rate: number;
    add_rates: number;
    add_time_rate: number;
    full_time_monthly: string; //'60000';
  };

  hasWeekday: boolean;
  hasSaturday: boolean;
  hasSunday: boolean;
  hasHoliday: boolean;
};

export type TParkCapacityInfo = {
  id: string;
  capacity: number;
  remains: number;
  update_time_millis: number;
};

export type TParkRealtimeInfo = TParkInfo & {
  meta?: TParkCapacityInfo;
};
