import axios from 'axios';
import { locationInfo } from '../types/location';
import { trafficInfo, trafficRealInfo } from '../types/traffic';

const KEY = '9179870253';
const INFO_URL = `http://data.ex.co.kr/openapi/safeDriving/forecast?key=${KEY}&type=json`;
const TRAFFIC_REAL_API = `http://data.ex.co.kr/openapi/trafficapi/trafficAll?key=${KEY}&type=json`;
const LOCATION_INFO_URL = `http://data.ex.co.kr/openapi/locationinfo/locationinfoUnit?key=${KEY}&type=json`;

export interface TrafficInfoResponse {
  list: trafficInfo;
  count: number;
  message: string;
  code: string;
}
export interface TrafficRealInfoResponse {
  trafficAll: trafficRealInfo;
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

export const getTrafficRealInfo = async () => {
  const { data } = await axios.get<TrafficRealInfoResponse>(TRAFFIC_REAL_API);
  console.log('suc', data);
  return data;
};

export const getLocationInfo = async () => {
  const { data } = await axios.get<LocationInfoResponse>(LOCATION_INFO_URL);
  console.log('suc', data);
  return data;
};
