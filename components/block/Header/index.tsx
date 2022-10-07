import { useCallback } from 'react';
import * as S from './style';

interface IProps {
  title?: string;
}

function Header({ title }: IProps) {
  const getTitle = useCallback(() => {
    return <>{title}</>;
  }, [title]);
  return (
    <>
      <S.Header>
        <div>{getTitle()}</div>
      </S.Header>
    </>
  );
}

export default Header;
