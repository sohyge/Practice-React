import axios from 'axios';

const INFO_URL = 'http://data.ex.co.kr/openapi/safeDriving/forecast?key=9179870253&type=json';
export const getTrafficInfo = async () => {
  const { data } = await axios.get(INFO_URL);
  console.log('suc', data);
  return data;
};
