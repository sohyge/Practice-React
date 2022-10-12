import * as S from './style';

interface IProps {
  text: string;
  onClick?: () => void;
}
function ItemBox({ text, onClick }: IProps) {
  return <S.ItemBoxWrap>{text}</S.ItemBoxWrap>;
}
export default ItemBox;
