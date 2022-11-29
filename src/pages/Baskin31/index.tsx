import React, { useCallback, useEffect, useState } from "react";
import Board from "../../components/Board";

function Baskin31() {
  const MainRender = useCallback(() => {
    return <Board></Board>;
  }, []);
  return <>{MainRender()}</>;
}

export default Baskin31;
