import * as S from './style';

interface IProps {
  text: string;
}
function Title({ text }: IProps) {
  return <S.TitleWrap>{text}</S.TitleWrap>;
}
export default Title;
