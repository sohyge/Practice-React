import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Tictactoe from "./pages/Tictactoe";
import Baskin31 from "./pages/Baskin31";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/Tictactoe" element={<Tictactoe />}></Route>
          <Route path="/Baskin31" element={<Baskin31 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
