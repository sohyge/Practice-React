import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Board from "../../components/Board";

function MainLayout() {
  const MainRender = useCallback(() => {
    return (
      <Board>
        {/* <a href="/Tictactoe">틱택토우!</a> */}
        <Link to="/Tictactoe">틱택토우!</Link>
      </Board>
    );
  }, []);
  return <>{MainRender()}</>;
}

export default MainLayout;
