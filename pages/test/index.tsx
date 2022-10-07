import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';

function test({}: NextPage) {
  return (
    <>
      <MainLayout title="하이루 반가워요">무야호</MainLayout>
    </>
  );
}

export default test;
