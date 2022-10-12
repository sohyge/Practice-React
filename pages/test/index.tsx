import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo } from '../../libs/apis/openAPI';

function test({}: NextPage) {
  const { data, error, isLoading } = useQuery('testCacheKey', getTrafficInfo, {
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
          <div>
            {itemList.map((item: any, i: number) => {
              console.log(item);
              console.log(item.stime);
              return <span key={i}>123</span>;
            })}
          </div>
        );
      }
    }
  }, [data, isLoading]);

  const getTitle = useCallback(() => {
    return <span>hi</span>;
  }, []);

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
