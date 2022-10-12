import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficInfo } from '../../libs/apis/openAPI';

function test({}: NextPage) {
  const { data, error } = useQuery('testCacheKey', getTrafficInfo, {
    refetchOnWindowFocus: false,
  });

  const getListRender = useCallback(() => {
    if (error) {
      console.log('error');
    } else {
      if (data?.list) {
        const itemList = data.list[0];
        if (itemList.length <= 0) {
          console.log('error');
        }
        return <span>{itemList.cbssu}</span>;
      }
    }
  }, [data]);

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
