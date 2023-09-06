import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "../src/pages/StartPage";
import MainPage from "../src/pages/MainPage";
import GoLoginPage from "../src/pages/GoLoginPage";
import RequiredAuthLayout from "../src/layouts/Auth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 공통 레이아웃 */}
          <Route path={"/"} element={<StartPage />}></Route>
          <Route path={"/goLogin"} element={<GoLoginPage />}></Route>
          {/* 사용자 인증 레이아웃 */}
          <Route element={<RequiredAuthLayout />}>
            <Route path={"/main"} element={<MainPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
