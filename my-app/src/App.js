import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "../src/pages/StartPage";
import MainPage from "../src/pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 공통 레이아웃 */}
          <Route path={"/"} element={<StartPage />}></Route>
          {/* 사용자 인증 레이아웃 */}
          <Route path={"/main"} element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
