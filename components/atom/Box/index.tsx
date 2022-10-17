import styled, { css } from 'styled-components';

interface IProps {
  className?: string;
  pl?: string | number;
  pr?: string | number;
  pt?: string | number;
  pb?: string | number;
  bdt?: string;
  bdb?: string;
  ml?: string | number;
  mr?: string | number;
  mt?: string | number;
  mb?: string | number;
}

export const Box = styled.div.attrs(() => ({
  className: 'box',
}))<IProps>`
  padding-left: ${({ pl }) => (typeof pl === 'number' ? `${pl}px` : pl)};
  padding-right: ${({ pr }) => (typeof pr === 'number' ? `${pr}px` : pr)};
  padding-top: ${({ pt }) => (typeof pt === 'number' ? `${pt}px` : pt)};
  padding-bottom: ${({ pb }) => (typeof pb === 'number' ? `${pb}px` : pb)};
  border-top: ${({ bdt }) => bdt};
  border-bottom: ${({ bdb }) => bdb};
  margin-left: ${({ ml }) => (typeof ml === 'number' ? `${ml}px` : ml)};
  margin-right: ${({ mr }) => (typeof mr === 'number' ? `${mr}px` : mr)};
  margin-top: ${({ mt }) => (typeof mt === 'number' ? `${mt}px` : mt)};
  margin-bottom: ${({ mb }) => (typeof mb === 'number' ? `${mb}px` : mb)};
`;
