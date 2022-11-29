import React, { useCallback, useEffect, useState } from "react";
import Board from "../../components/Board";
import ItemList from "../../components/ItemList";
import Square from "../../components/Square";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";

function MainLayout() {
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [mocArr, setMocArr] = useState(Array(9).fill(null));

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
  }, [mocArr, winner]);

  //3x3 승부 판독기
  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (mocArr[a] && mocArr[a] === mocArr[b] && mocArr[a] === mocArr[c]) {
        setWinner(mocArr[a]);
      }
    }
  }, [mocArr, winner]);

  const clickItem = useCallback(
    (i: number) => {
      const tmp = [...mocArr];
      //원래 있는곳에 두려면 막아버림 혹은 승자가 있으면 막아버림
      if (tmp[i] !== null || winner !== "") return;

      if (turn) {
        tmp[i] = "O";
      } else {
        tmp[i] = "X";
      }
      setMocArr(tmp);
      setTurn(!turn);
    },
    [mocArr, winner]
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
    setMocArr(Array(9).fill(null));
    setTurn(true);
    setWinner("");
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
        mode={"block"}
      ></Text>
    );
  }, [turn, mocArr]);
  const getWinnerRender = useCallback(() => {
    return (
      <Text
        size={15}
        bold={"bold"}
        text={`The Winner Is... ${winner} !`}
        mode={"block"}
      ></Text>
    );
  }, [winner]);

  const MainRender = useCallback(() => {
    return (
      <Board>
        {getButtonRender()}
        {getTilteRender()}
        {winner !== "" ? getWinnerRender() : null}
        {winner === "" ? getTitleSubRender() : null}
        <ItemList>{getItem()}</ItemList>
      </Board>
    );
  }, [getItem]);
  return <>{MainRender()}</>;
}

export default MainLayout;
