import React, { memo } from 'react';
import * as S from './style';

interface IProps {
  className?: string;
  children?: React.ReactNode;
  perView?: number;
  rowGap?: number;
  colGap?: number;
  md?: { perView: number };
}

const ItemsGrid = ({ className, children, perView = 2, rowGap = 0, colGap = 0, md = { perView: perView } }: IProps) => {
  return (
    <S.ItemsGrid className={className} perView={perView} rowGap={rowGap} colGap={colGap} md={md}>
      {children}
    </S.ItemsGrid>
  );
};

export default memo(ItemsGrid);
