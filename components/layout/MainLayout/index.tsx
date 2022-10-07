import { useCallback } from 'react';
import BaseLayout from '../BaseLayout/index';
import * as S from './style';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

function MainLayout({ children, title }: IProps) {
  const getRender = useCallback(() => {
    return (
      <main id="container">
        <div className="content">{children}</div>
      </main>
    );
  }, []);

  return (
    <>
      <S.MainLayout>
        <BaseLayout title={title}>{getRender()}</BaseLayout>
      </S.MainLayout>
    </>
  );
}

export default MainLayout;
