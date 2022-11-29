import React, { Dispatch, SetStateAction, useState } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: Dispatch<SetStateAction<string | undefined>>;
};

export const Login = (props: Props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate();
  const onClickLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth("true");
      navigate("/home");
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
