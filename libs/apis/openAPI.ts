import axios from 'axios';
import { trafficInfo } from '../types/traffic';

const INFO_URL = 'http://data.ex.co.kr/openapi/safeDriving/forecast?key=9179870253&type=json';

export interface TrafficInfoResponse {
  list: trafficInfo;
  count: number;
  message: string;
  code: string;
}

export const getTrafficInfo = async () => {
  const { data } = await axios.get<TrafficInfoResponse>(INFO_URL);
  console.log('suc', data);
  return data;
};
