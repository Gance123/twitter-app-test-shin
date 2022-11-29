import React, { useState } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

export const Login = () => {
  const [isAuth, setIsAuth] = useState<string | undefined>("false");

  const onClickLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth("true")
    });
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_icon">
          <TwitterIcon />
        </div>
        <div className="login_button">
          <Button onClick={onClickLogin}>Googleでログイン</Button>
        </div>
      </div>
    </div>
  );
};
