import type { NextPage } from 'next';
import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import InfoGrid from '../../components/block/InfoGrid';
import InfoGridItem from '../../components/block/InfoGridItem';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo } from '../../libs/apis/openAPI';

function test() {
  const { data, error, isLoading } = useQuery('testCacheKey', () => getTrafficInfo(), {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const getListRender = useCallback(() => {
    if (error) {
      console.log('error');
    } else {
      if (data?.list) {
        const itemList = data.list;
        if (itemList.length <= 0) {
          console.log('error');
        }
        return (
          <InfoGrid>
            {itemList.map((item: any, i: number) => {
              return <InfoGridItem key={i} title={item.code} />;
            })}
          </InfoGrid>
        );
      }
    }
  }, [data, isLoading]);

  const getTitle = () => {
    console.log(`${data}`);
    console.log(`${data?.code}`);
    return <span>{`${data?.code || 'ㅇㅇ'}`}</span>;
  };

  return (
    <>
      <MainLayout title="Test Page">
        {getTitle()}
        {getListRender()}
      </MainLayout>
    </>
  );
}

export default test;
