import Footer from '../block/Footer';
import Header from '../block/Header';

interface IProps {
  children?: React.ReactNode;
}

function MainLayout({ children }: IProps) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
