import axios from 'axios';
import { locationInfo } from '../types/location';
import { trafficInfo } from '../types/traffic';

const KEY = '9179870253';
const INFO_URL = `http://data.ex.co.kr/openapi/safeDriving/forecast?key=${KEY}&type=json`;
const LOCATION_INFO_URL = `http://data.ex.co.kr/openapi/locationinfo/locationinfoUnit?key=${KEY}&type=json`;

export interface TrafficInfoResponse {
  list: trafficInfo;
  count: number;
  message: string;
  code: string;
}
export interface LocationInfoResponse {
  list: locationInfo;
  count: number;
  message: string;
  code: string;
}
export const getTrafficInfo = async () => {
  const { data } = await axios.get<TrafficInfoResponse>(INFO_URL);
  console.log('suc', data);
  return data;
};

export const getLocationInfo = async () => {
  const { data } = await axios.get<LocationInfoResponse>(LOCATION_INFO_URL);
  console.log('suc', data);
  return data;
};
