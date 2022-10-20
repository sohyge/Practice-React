import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getTrafficInfo } from '../../libs/apis/openAPI';
import { CACHE_KEY } from '../../libs/utils/cacheKey';

function Example() {
  const { isLoading, error, data } = useQuery([CACHE_KEY.TRAFFIC.TRAFFIC_INFO], () => getTrafficInfo());

  const getInfo = useCallback(() => {
    return <div>{data?.list[0].cbssu_bus}</div>;
  }, []);
  return <div>{getInfo()}</div>;
}

export default Example;
