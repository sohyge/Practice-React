import * as S from './style';

interface IProps {
  title?: string;
}

function InfoGridItem({ title }: IProps) {
  return <S.InfoGridItem>{title}</S.InfoGridItem>;
}

export default InfoGridItem;
