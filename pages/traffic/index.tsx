import type { GetStaticProps } from 'next';
import { Box } from '../../components/atom/Box';
import ItemsGrid from '../../components/block/ItemsGrid';
import TrafficItem from '../../components/block/TrafficItem';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo, TrafficInfoResponse } from '../../libs/apis/openAPI';

export interface IProps {
  trafficInfo: TrafficInfoResponse;
}
function trafficPage({ trafficInfo }: IProps) {
  const getTrafficList = () => {
    const trafficList = trafficInfo;
    if (!trafficList) return false;
    if (trafficList?.list) {
      const traffic = trafficList?.list[0];
      return (
        <Box>
          <ItemsGrid className={'traffic_list'} perView={2} rowGap={40} colGap={4} md={{ perView: 3 }}>
            <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} />
            <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} />
            <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} />
            <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} />
            <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} />
            <TrafficItem title={'서울방향 교통량'} traffic={traffic.cseoulDir} />
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
