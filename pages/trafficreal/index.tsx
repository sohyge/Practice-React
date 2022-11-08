import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { getTrafficRealInfo, TrafficRealInfoResponse } from '../../libs/apis/openAPI';
import { CACHE_KEY } from '../../libs/utils/cacheKey';

function trafficRealInfoPage() {
  const { isLoading, error, data } = useQuery<TrafficRealInfoResponse, Error>(
    [CACHE_KEY.TRAFFIC.TRAFFIC_REAL_INFO],
    () => getTrafficRealInfo(),
  );

  const getInfo = useCallback(() => {
    return (
      <div>
        {data?.trafficAll.map((i) => {
          return (
            <div>
              {i.exDivName},{i.tmName},{i.trafficAmout}
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

export default trafficRealInfoPage;
