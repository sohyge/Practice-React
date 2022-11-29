import React, { useCallback, useEffect, useState } from "react";
import Board from "../../components/Board";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Title from "../../components/Title";

function Baskin31() {
  const [myDice, setMyDice] = useState(0);
  const [opDice, setOpDice] = useState(0);

  const getDiceRender = useCallback(() => {
    return (
      <>
        <Title title="베스킨라빈스 31 !" size={30} bold={"bolder"}></Title>
        <Text
          bold="nomal"
          size={15}
          text={`상대의 주사위 : ${opDice}`}
          mode={"block"}
          mt={10}
          mb={10}
        />
        <Text
          bold="nomal"
          size={15}
          text={`당신의 주사위 : ${myDice}`}
          mode={"block"}
          mb={10}
        />
        <Button
          title="주사위 굴리기"
          onClick={() => {
            rollDice();
          }}
        />
      </>
    );
  }, [myDice, opDice]);

  function rolling() {
    setMyDice(() => Math.floor(Math.random() * 100));
    setOpDice(() => Math.floor(Math.random() * 100));
  }

  const rollDice = useCallback(() => {
    const rollingDice = setInterval(() => {
      rolling();
    }, 50);

    setTimeout(() => {
      clearInterval(rollingDice);
    }, 500);
  }, []);

  const MainRender = useCallback(() => {
    return <Board>{getDiceRender()}</Board>;
  }, [getDiceRender]);
  return <>{MainRender()}</>;
}

export default Baskin31;
