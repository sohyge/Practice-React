import React from "react";
import styled from "styled-components";

export interface Iprops {
  title?: string;
  onClick?: () => void;
}

const _Button = styled.button``;

const Button = ({ title, onClick }: Iprops) => {
  return <_Button onClick={onClick}>{title}</_Button>;
};
export default Button;
