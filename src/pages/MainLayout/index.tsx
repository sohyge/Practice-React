import React, { useCallback, useState } from "react";
import Board from "../../components/Board";
import ItemList from "../../components/ItemList";
import Square from "../../components/Square";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";

function MainLayout() {
  const [turn, setTurn] = useState(true);
  const [mocArr, setMocArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const getItem = useCallback(() => {
    return mocArr.map((v, i) => {
      return (
        <Square
          key={i}
          onClick={() => {
            clickItem(i);
          }}
        >
          {mocArr[i]}
        </Square>
      );
    });
  }, [mocArr]);
  const clickItem = useCallback(
    (i: number) => {
      const tmp = [...mocArr];

      //원래 있는곳에 두려면 막아버림
      if (tmp[i] !== "") return;

      if (turn) {
        tmp[i] = "O";
      } else {
        tmp[i] = "X";
      }
      setMocArr(tmp);
      setTurn(!turn);
    },
    [mocArr, setMocArr]
  );
  const getButtonRender = useCallback(() => {
    return (
      <Button
        title={"새 게임하기"}
        onClick={() => {
          resetData();
        }}
      />
    );
  }, []);

  const resetData = useCallback(() => {
    setMocArr(["", "", "", "", "", "", "", "", ""]);
    setTurn(true);
  }, []);

  const getTilteRender = useCallback(() => {
    return <Title size={30} bold={"bolder"} title={"Tic Tac Toe !"} />;
  }, []);

  const getTitleSubRender = useCallback(() => {
    return (
      <Text
        size={15}
        bold={"nomal"}
        text={`Here is Turn : ${turn === true ? "O" : "X"}`}
      ></Text>
    );
  }, [turn, mocArr]);

  const MainRender = useCallback(() => {
    return (
      <Board>
        {getButtonRender()}
        {getTilteRender()}
        {getTitleSubRender()}
        <ItemList>{getItem()}</ItemList>
      </Board>
    );
  }, [getItem]);
  return <>{MainRender()}</>;
}

export default MainLayout;
