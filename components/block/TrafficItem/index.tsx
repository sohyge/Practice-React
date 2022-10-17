import Text from '../../atom/Text';
import Title from '../../atom/Title';
import * as S from './style';

interface IProps {
  title?: string;
  traffic?: string;
}

function InfoGridItem({ title, traffic }: IProps) {
  return (
    <S.InfoGridItem>
      <Title text={title} size={20} weight={500} />
      <Text size={15} weight={500}>
        {traffic}
      </Text>
    </S.InfoGridItem>
  );
}

export default InfoGridItem;
