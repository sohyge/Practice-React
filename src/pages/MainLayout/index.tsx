import React, { useCallback } from "react";
import Board from "../../components/Board";
import ItemList from "../../components/ItemList";
import Square from "../../components/Square";

function MainLayout() {
  const MocArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const getItem = useCallback(() => {
    return MocArr.map((v, i) => {
      return <Square>{v + 1}</Square>;
    });
  }, []);
  const MainRender = useCallback(() => {
    return (
      <Board>
        <ItemList>{getItem()}</ItemList>
      </Board>
    );
  }, [getItem]);
  return <>{MainRender()}</>;
}

export default MainLayout;
