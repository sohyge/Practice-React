import { useCallback } from 'react';

function Example() {
  const getInfo = useCallback(() => {
    return <div>안녕</div>;
  }, []);
  return <div>{getInfo()}</div>;
}

export default Example;
