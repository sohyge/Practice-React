import Text from '../../atom/Text';
import * as S from './style';

interface IProps {
  title?: string;
  traffic?: string;
}

function InfoGridItem({ title, traffic }: IProps) {
  return (
    <S.InfoGridItem>
      <Text size={20} weight={500}>
        {title}
      </Text>
      {traffic}
    </S.InfoGridItem>
  );
}

export default InfoGridItem;
