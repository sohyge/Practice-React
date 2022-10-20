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
  tsize?: number;
  size?: number;
}

function InfoGridItem({ type, title, traffic, className, max, tsize, size }: IProps) {
  const titleSize = tsize === undefined ? 20 : tsize;
  const contentSize = size === undefined ? 15 : size;
  const convertTraffic = useCallback((_traffic: string) => {
    if (type === 'time') return _traffic;
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
    if (type !== 'time') {
      if (traffic === max) {
        return setMaxTraffic(100);
      }
      return setMaxTraffic(Math.ceil(_max / _traffic));
    }
  }, [traffic, max]);

  const getRender = useCallback(() => {
    return <>{getMainRender()}</>;
  }, [type, traffic]);

  const getMainRender = useCallback(() => {
    return (
      <>
        <Title text={title} size={titleSize} weight={500} />
        <Text size={contentSize} weight={500}>
          {convertTraffic(traffic)}
        </Text>
      </>
    );
  }, [getRender]);

  const getProgressRender = useCallback(() => {
    return <>{type !== 'time' && <ProgressBar traffic={maxTraffic} max={100} />}</>;
  }, [maxTraffic]);

  return (
    <S.InfoGridItem className={className}>
      {getRender()}
      {getProgressRender()}
    </S.InfoGridItem>
  );
}

export default InfoGridItem;
