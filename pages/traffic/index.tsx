import dayjs from 'dayjs';
import type { GetStaticProps } from 'next';
import { useCallback } from 'react';
import { Box } from '../../components/atom/Box';
import ItemsGrid from '../../components/block/ItemsGrid';
import TrafficItem from '../../components/block/TrafficItem';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo, TrafficInfoResponse } from '../../libs/apis/openAPI';

export interface IProps {
  trafficInfo: TrafficInfoResponse;
}
function trafficPage({ trafficInfo }: IProps) {
  const getDate = useCallback((_date: string) => {
    const date = dayjs(_date).format('YYYY-MM-DD');
    // console.log(date);
    return date;
  }, []);
  const getTime = useCallback((_time: string) => {
    //데이터 형식이 day.js 시간 포맷이랑 안먹혀서 substring으로 대체
    const time = _time.substring(0, 2) + ':' + _time.substring(2, _time.length);
    // const time = dayjs(_time).format('HH:MM');
    // console.log(time);
    return time;
  }, []);
  const convertTraffic = useCallback((_traffic: string) => {
    if (parseInt(_traffic) >= 10000) {
      const _cTraffic = _traffic.slice(0, -4);
      return `약 ${_cTraffic}만대`;
    } else if (parseInt(_traffic) >= 1000) {
      const _cTraffic = _traffic.slice(0, -3);
      return `약 ${_cTraffic}천대`;
    } else {
      return `${_traffic}대`;
    }
  }, []);

  const getTrafficList = () => {
    const trafficList = trafficInfo;
    if (!trafficList) return false;
    if (trafficList?.list) {
      const traffic = trafficList?.list[0];
      return (
        <Box>
          <ItemsGrid className={'traffic_list'} perView={2} rowGap={40} colGap={4} md={{ perView: 3 }}>
            <Box pb={10}>
              <TrafficItem title={'날짜 / 시간'} traffic={`${getDate(traffic.sdate)} / ${getTime(traffic.stime)}`} />
            </Box>
            <Box pb={10}>
              <TrafficItem title={'전국 교통량'} traffic={convertTraffic(traffic.cjunkook)} />
            </Box>
            <Box pb={10}>
              <TrafficItem title={'지방방향 교통량'} traffic={convertTraffic(traffic.cjibangDir)} />
            </Box>
            <Box>
              <TrafficItem title={'서울방향 교통량'} traffic={convertTraffic(traffic.cseoulDir)} />
            </Box>
          </ItemsGrid>
        </Box>
      );
    }
  };

  return (
    <>
      <MainLayout title="Test Page">{getTrafficList()}</MainLayout>
    </>
  );
}
export const getServerSideProps: GetStaticProps = async (context) => {
  const trafficInfo = await getTrafficInfo();

  try {
    return {
      props: {
        trafficInfo: trafficInfo,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
export default trafficPage;
