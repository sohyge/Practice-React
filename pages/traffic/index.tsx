import dayjs from 'dayjs';
import type { GetStaticProps } from 'next';
import { useCallback } from 'react';
import ItemsGrid from '../../components/block/ItemsGrid';
import TrafficItem from '../../components/block/TrafficItem';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo, TrafficInfoResponse } from '../../libs/apis/openAPI';
import { trafficInfo } from '../../libs/types/traffic';

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

  const getTrafficList = () => {
    const trafficList = trafficInfo;
    if (!trafficList) return false;
    if (trafficList?.list) {
      const traffic: trafficInfo = trafficList?.list[0];
      return (
        <ItemsGrid className={'traffic_list'} perView={2} rowGap={40} colGap={4} md={{ perView: 3 }}>
          <TrafficItem
            type={'time'}
            title={'날짜 / 시간'}
            className={'alone'}
            traffic={`${getDate(traffic.sdate)} / ${getTime(traffic.stime)}`}
          />
          <TrafficItem title={'전국 교통량'} className={'alone'} traffic={traffic.cjunkook} max={traffic.cjunkook} />
          <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} max={traffic.cjunkook} />
          <TrafficItem title={'지방방향 교통량'} traffic={traffic.cjibangDir} max={traffic.cjunkook} />
          <TrafficItem type={'time'} title={'서울 -> 대전 소요시간'} traffic={traffic.csudj} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'서울 -> 대구 소요시간'} traffic={traffic.csudg} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'서울 -> 울산 소요시간'} traffic={traffic.csuus} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'서울 -> 부산 소요시간'} traffic={traffic.csubs} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'서울 -> 광주 소요시간'} traffic={traffic.csugj} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'서울 -> 목포 소요시간'} traffic={traffic.csump} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'서울 -> 강릉 소요시간'} traffic={traffic.csukr} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'대전 -> 서울 소요시간'} traffic={traffic.cdjsu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'대구 -> 서울 소요시간'} traffic={traffic.cdgsu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'울산 -> 서울 소요시간'} traffic={traffic.cussu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'부산 -> 서울 소요시간'} traffic={traffic.cbssu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'광주 -> 서울 소요시간'} traffic={traffic.cgjsu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'목포 -> 서울 소요시간'} traffic={traffic.cmpsu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'강릉 -> 서울 소요시간'} traffic={traffic.ckrsu} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'남양주 -> 양양 소요시간'} traffic={traffic.csuyy} tsize={15} size={10} />
          <TrafficItem type={'time'} title={'양양 -> 남양주 소요시간'} traffic={traffic.cyysu} tsize={15} size={10} />
          <TrafficItem
            type={'time'}
            title={'서울 -> 대전 버스 소요시간'}
            traffic={traffic.csudj_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'서울 -> 대구 버스 소요시간'}
            traffic={traffic.csudg_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'서울 -> 울산 버스 소요시간'}
            traffic={traffic.csuus_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'서울 -> 부산 버스 소요시간'}
            traffic={traffic.csubs_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'서울 -> 광주 버스 소요시간'}
            traffic={traffic.csugj_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'서울 -> 목포 버스 소요시간'}
            traffic={traffic.csump_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'서울 -> 강릉 버스 소요시간'}
            traffic={traffic.csukr_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'남양주 -> 양양 버스 소요시간'}
            traffic={traffic.csuyy_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'대전 -> 서울 버스 소요시간'}
            traffic={traffic.cdjsu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'대구 -> 서울 버스 소요시간'}
            traffic={traffic.cdgsu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'울산 -> 서울 버스 소요시간'}
            traffic={traffic.cussu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'부산 -> 서울 버스 소요시간'}
            traffic={traffic.cbssu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'광주 -> 서울 버스 소요시간'}
            traffic={traffic.cgjsu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'목포 -> 서울 버스 소요시간'}
            traffic={traffic.cmpsu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'강릉 -> 서울 버스 소요시간'}
            traffic={traffic.ckrsu_bus}
            tsize={15}
            size={10}
          />
          <TrafficItem
            type={'time'}
            title={'양양 -> 남양주 버스 소요시간'}
            traffic={traffic.cyysu_bus}
            tsize={15}
            size={10}
          />
        </ItemsGrid>
      );
    }
  };

  return (
    <>
      <MainLayout title="현재 교통예보 현황">{getTrafficList()}</MainLayout>
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
