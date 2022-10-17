import type { GetStaticProps, NextPage } from 'next';
import { useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import InfoGrid from '../../components/block/InfoGrid';
import InfoGridItem from '../../components/block/InfoGridItem';
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
      return <InfoGrid>{`${traffic.cbssu}`}</InfoGrid>;
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
