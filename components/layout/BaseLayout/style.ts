import styled from 'styled-components';

interface IProps {
  className?: string;
}

export const BaseLayout = styled.div<IProps>`
  min-height: 100%;
  padding-top: 75px;
  padding-left: 10px;
  padding-right: 10px;
  &.header-hide {
    #header {
      top: -50px;
    }
  }
`;
