import "./App.scss";
import "./components/organisms/sidebar/SideBar.scss";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { Logout } from "./components/pages/Logout";
import { AccountSetting } from "./components/pages/AccountSetting";

export default function App() {
  const [isAuth, setIsAuth] = useState<string | undefined>("false");
  const [accountName, setAccountName] = useState<string>("匿名さん");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />}></Route>
          <Route
            path="/home"
            element={<Home accountName={accountName} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/setting"
            element={<AccountSetting setAccountName={setAccountName} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
