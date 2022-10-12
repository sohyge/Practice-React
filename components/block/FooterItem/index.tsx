import * as S from './style';

interface IProps {
  items: React.ReactNode;
}

function FooterItem({ items }: IProps) {
  return (
    <>
      <S.Content>{items}</S.Content>
    </>
  );
}

export default FooterItem;
