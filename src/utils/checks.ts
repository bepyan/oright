import { TParkRealtimeInfo } from '@/types/models';

export const checkIsParkFetching = (parkItem: TParkRealtimeInfo) =>
  parkItem.parking_type !== 'PRIVATE';
