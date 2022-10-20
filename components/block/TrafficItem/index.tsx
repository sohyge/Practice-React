import { useCallback, useEffect, useState } from 'react';
import Text from '../../atom/Text';
import Title from '../../atom/Title';
import ProgressBar from '../ProgressBar';
import * as S from './style';

interface IProps {
  className?: string;
  title?: string;
  traffic?: string;
  type?: string;
  max?: string;
}

function InfoGridItem({ type, title, traffic, className, max }: IProps) {
  const convertTraffic = useCallback((_traffic: string) => {
    if (type === 'title') return _traffic;
    if (parseInt(_traffic) >= 10000) {
      const _cTraffic = _traffic.slice(0, -4);
      return `약 ${_cTraffic}만대`;
    } else if (parseInt(_traffic) >= 1000) {
      const _cTraffic = _traffic.slice(0, -3);
      return `약 ${_cTraffic}천대`;
    } else {
      return `${_traffic}대`;
    }
  }, []);
  const [maxTraffic, setMaxTraffic] = useState<number>();
  useEffect(() => {
    const _max = parseInt(max);
    const _traffic = parseInt(traffic);
    if (type !== 'title') {
      if (traffic === max) {
        return setMaxTraffic(100);
      }
      return setMaxTraffic(Math.ceil(_max / _traffic));
    }
  }, []);

  return (
    <S.InfoGridItem className={className}>
      <Title text={title} size={20} weight={500} />
      <Text size={15} weight={500}>
        {convertTraffic(traffic)}
      </Text>
      {type !== 'title' && <ProgressBar traffic={maxTraffic} max={100} />}
    </S.InfoGridItem>
  );
}

export default InfoGridItem;
