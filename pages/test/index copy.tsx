import type { GetStaticProps, NextPage } from 'next';
import { useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import InfoGrid from '../../components/block/InfoGrid';
import InfoGridItem from '../../components/block/InfoGridItem';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo } from '../../libs/apis/openAPI';

export interface IProps {
  trafficInfo: Array<string>;
}
function test({ trafficInfo }: IProps) {
  const getTitle = () => {
    console.log(`${trafficInfo}`);
    console.log(`${trafficInfo?.code}`);
    return <span>{`${trafficInfo?.code || 'ㅇㅇ'}`}</span>;
  };

  return (
    <>
      <MainLayout title="Test Page">{getTitle()}</MainLayout>
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
export default test;
