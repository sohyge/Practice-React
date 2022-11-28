import React from "react";
import styled from "styled-components";

export interface Iprops {
  size: number;
  bold: "bold" | "bolder" | "nomal";
  title?: string;
}

const _Title = styled.p<Iprops>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold};
`;

const Title = ({ size, bold, title }: Iprops) => {
  const param: any = {
    size: size,
    bold: bold,
  };
  return <_Title {...param}>{title}</_Title>;
};
export default Title;
