import Text from '../Text';
import * as S from './style';

interface IProps {
  text?: string;
  size?: number;
  weight?: number;
}
function Title({ text, size, weight }: IProps) {
  return (
    <S.TitleWrap>
      <Text size={size} weight={weight}>
        {text}
      </Text>
    </S.TitleWrap>
  );
}
export default Title;
