import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getTrafficInfo } from '../../libs/apis/openAPI';

function Example() {
  const { isLoading, error, data } = useQuery(['repoData'], () => getTrafficInfo());

  const getInfo = useCallback(() => {
    return <div>{data?.list[0].cbssu_bus}</div>;
  }, []);
  return <div>{getInfo()}</div>;
}

export default Example;
