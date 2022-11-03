import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { getLocationInfo } from '../../libs/apis/openAPI';
import { CACHE_KEY } from '../../libs/utils/cacheKey';

function locationPage() {
  const { isLoading, error, data } = useQuery([CACHE_KEY.LOCATION.LOCATION_INFO], () => getLocationInfo());

  const getInfo = useCallback(() => {
    return (
      <div>
        {data?.list.map((i) => {
          return (
            <div>
              {i.unitName},{i.routeName}
            </div>
          );
        })}
      </div>
    );
  }, [data]);
  return (
    <>
      <MainLayout title="영업소 위치 정보">{getInfo()}</MainLayout>
    </>
  );
}

export default locationPage;
