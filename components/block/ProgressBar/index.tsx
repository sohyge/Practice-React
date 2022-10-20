import * as S from './style';

interface IProps {
  className?: string;
  traffic?: string;
  max?: number;
}

function ProgressBar({ traffic, max, className }: IProps) {
  return (
    <S.Progress>
      <progress className="className" value={traffic} max={max} />
    </S.Progress>
  );
}

export default ProgressBar;
