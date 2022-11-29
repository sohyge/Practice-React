import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Board from "../../components/Board";

function MainLayout() {
  const MainRender = useCallback(() => {
    return (
      <Board>
        <div>
          <Link to="/Tictactoe">틱택토우!</Link>
        </div>
        <div>
          <Link to="/Baskin31">베스킨라빈스31</Link>
        </div>
      </Board>
    );
  }, []);
  return <>{MainRender()}</>;
}

export default MainLayout;
