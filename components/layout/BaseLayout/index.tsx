import Footer from '../block/Footer';
import Header from '../block/Header';
import * as S from './style';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

function BaseLayout({ children, title }: IProps) {
  return (
    <>
      <S.BaseLayout>
        <Header title={title}></Header>
        {children}
        <Footer></Footer>
      </S.BaseLayout>
    </>
  );
}

export default BaseLayout;
