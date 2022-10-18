import Text from '../../atom/Text';
import Title from '../../atom/Title';
import * as S from './style';

interface IProps {
  className?: string;
  title?: string;
  traffic?: string;
}

function InfoGridItem({ title, traffic, className }: IProps) {
  return (
    <S.InfoGridItem className={className}>
      <Title text={title} size={20} weight={500} />
      <Text size={15} weight={500}>
        {traffic}
      </Text>
    </S.InfoGridItem>
  );
}

export default InfoGridItem;
