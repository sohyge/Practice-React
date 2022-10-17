import type { NextPage } from 'next';
import { useEffect } from 'react';
import router from 'next/router';

function index({}: NextPage) {
  useEffect(() => {
    router.push('/traffic');
  }, []);
  return <></>;
}

export default index;
