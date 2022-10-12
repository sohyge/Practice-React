import axios from 'axios';

export const getTrafficInfo = async (param: any) => {
  try {
    const { data } = await axios.get('http://data.ex.co.kr/openapi/safeDriving/forecast?key=9179870253&type=json');
    console.log('suc', data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
