import styled from 'styled-components';

interface IProps {
  className?: string;
}

export const InfoGridItem = styled.div.attrs(() => ({
  className: 'box',
}))<IProps>`
  padding-top: 10px;
`;
