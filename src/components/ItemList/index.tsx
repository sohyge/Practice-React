import React from "react";
import styled from "styled-components";

export interface Iprops {
  children?: React.ReactNode;
}

const ItemGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1px));
`;
const ItemList = ({ children }: Iprops) => {
  return <ItemGrid>{children}</ItemGrid>;
};

export default ItemList;
