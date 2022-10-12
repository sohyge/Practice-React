import * as S from './style';

interface IProps {
  children?: React.ReactNode;
}

function InfoGrid({ children }: IProps) {
  return <S.InfoGrid>{children}</S.InfoGrid>;
}

export default InfoGrid;
