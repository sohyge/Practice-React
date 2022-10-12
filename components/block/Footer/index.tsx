import { useCallback } from 'react';
import ItemBox from '../../atom/ItemBox';
import FooterItem from '../FooterItem';
import * as S from './style';

function Footer() {
  const getItems = useCallback(() => {
    return (
      <>
        {<ItemBox text={'메뉴1'}></ItemBox>}
        {<ItemBox text={'메뉴2'}></ItemBox>}
        {<ItemBox text={'메뉴3'}></ItemBox>}
        {<ItemBox text={'메뉴4'}></ItemBox>}
        {<ItemBox text={'메뉴5'}></ItemBox>}
      </>
    );
  }, []);
  return (
    <>
      <S.Footer>
        <FooterItem items={getItems()}></FooterItem>
        asfsaf
      </S.Footer>
    </>
  );
}

export default Footer;
