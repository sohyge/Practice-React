import styled, { css } from 'styled-components';

interface IProps {
  perView?: number;
  rowGap?: number;
  colGap?: number;
  md?: { perView: number };
}

export const ItemsGrid = styled.div<IProps>`
  row-gap: ${({ rowGap }) => rowGap}px;
  margin-left: ${({ colGap }) => (typeof colGap === 'number' ? `-${colGap / 2}px` : colGap)};
  margin-right: ${({ colGap }) => (typeof colGap === 'number' ? `-${colGap / 2}px` : colGap)};

  > .box {
    display: inline-block;
    width: ${({ perView }) => (typeof perView === 'number' ? `${100 / perView}%` : perView)};
    padding-left: ${({ colGap }) => (typeof colGap === 'number' ? `${colGap / 2}px` : colGap)};
    padding-right: ${({ colGap }) => (typeof colGap === 'number' ? `${colGap / 2}px` : colGap)};
  }

  > .alone {
    display: block;
    width: 100%;
  }
`;
