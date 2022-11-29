import React from "react";
import styled from "styled-components";

export interface Iprops {
  size: number;
  bold: "bold" | "bolder" | "nomal";
  text?: string;
  mode?: string;
}

const _Text = styled.span<Iprops>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold};
  display: ${({ mode }) => mode};
`;

const Text = ({ size, bold, text, mode }: Iprops) => {
  const param: any = {
    size: size,
    bold: bold,
  };
  return <_Text {...param}>{text}</_Text>;
};
export default Text;
