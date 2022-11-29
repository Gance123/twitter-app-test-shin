import "./App.scss";
import "./components/organisms/sidebar/SideBar.scss";

import { SideBar } from "./components/organisms/sidebar/SideBar";
import { TimeLine } from "./components/organisms/timeline/TimeLine";
import { Widget } from "./components/organisms/widget/Widget";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
