import styled, { css } from 'styled-components';

interface IProps {
  className: string;
  size: string | number;
  weight: string | number;
  lineHeight: string | number;
  color: string;
  align: string;
  font: string;
  underline: boolean;
  del: boolean;
  ellipsis: number;
}

export const TextWrap = styled.span<IProps>`
  font-size: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  line-height: ${({ lineHeight }) => (typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight)};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  text-decoration: ${({ underline, del }) => (!del && underline ? 'underline' : undefined)};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ font, theme }) =>
    font === 'bold'
      ? theme.fontFamily.bold
      : font === 'semibold'
      ? theme.fontFamily.semibold
      : font === 'medium'
      ? theme.fontFamily.medium
      : font === 'light'
      ? theme.fontFamily.light
      : null};
`;
