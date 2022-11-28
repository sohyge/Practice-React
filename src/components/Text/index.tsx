import React from "react";
import styled from "styled-components";

export interface Iprops {
  size: number;
  bold: "bold" | "bolder" | "nomal";
  text?: string;
}

const _Text = styled.span<Iprops>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold};
`;

const Text = ({ size, bold, text }: Iprops) => {
  const param: any = {
    size: size,
    bold: bold,
  };
  return <_Text {...param}>{text}</_Text>;
};
export default Text;
