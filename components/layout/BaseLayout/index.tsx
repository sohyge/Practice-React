import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useScroll } from '../../../libs/hooks';
import Footer from '../../block/Footer';
import Header from '../../block/Header';
import * as S from './style';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

function BaseLayout({ children, title }: IProps) {
  const [scrollY, setScrollY] = useState<number>(0);
  const [btnTopShow, setBtnTopShow] = useState<boolean>(false);
  const [layoutMode, setLayoutMode] = useState<string>('');
  const [isScrollDir, setIsScrollDir] = useState<string>('');

  /**
   * CSR일때 작동, window함수는 SSR에서 안먹힌다
   */
  if (typeof window !== 'undefined') {
    const { scrollY, scrollDirection } = useScroll();
    //스크롤 Y축
    useEffect(() => {
      setScrollY(scrollY);
    }, [scrollY]);

    //스크롤 업다운 체크
    useEffect(() => {
      if (scrollDirection === 'scrollDown') {
        setIsScrollDir(scrollDirection);
      } else if (scrollDirection === 'scrollUp') {
        setIsScrollDir(scrollDirection);
      }
    }, [scrollDirection]);
  }

  useEffect(() => {
    if (isScrollDir === 'scrollDown') {
      setLayoutMode('header-hide');
    } else {
      setLayoutMode('header-origin');
    }
  }, [isScrollDir]);

  return (
    <>
      <S.BaseLayout className={layoutMode}>
        <Header title={title}></Header>
        {children}
        <Footer></Footer>
      </S.BaseLayout>
    </>
  );
}

export default BaseLayout;
