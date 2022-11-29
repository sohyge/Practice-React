import React from "react";
import styled from "styled-components";

export interface Iprops {
  size: number;
  bold: "bold" | "bolder" | "nomal";
  text?: string;
  mode?: string;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

const _Text = styled.span<Iprops>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold};
  display: ${({ mode }) => mode};
  margin-top: ${({ mt }) => mt}px;
  margin-right: ${({ mr }) => mr}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
`;

const Text = ({ size, bold, text, mode, mt, mr, mb, ml }: Iprops) => {
  const param: any = {
    size: size,
    bold: bold,
    mode: mode,
    mt: mt,
    mr: mr,
    mb: mb,
    ml: ml,
  };
  return <_Text {...param}>{text}</_Text>;
};
export default Text;
