import React, { Dispatch, SetStateAction, useState } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: Dispatch<SetStateAction<string | undefined>>;
};

export const Logout = (props: Props) => {
  const { setIsAuth } = props;
  const navigate = useNavigate()

  const onClickLogin = () => {
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth("false");
      navigate("/")
    });
  };

  return (
    <div className="login">
      <div className="login_container">
        <div className="login_icon">
          <TwitterIcon />
        </div>
        <div className="login_button">
          <Button onClick={onClickLogin}>ログアウト</Button>
        </div>
      </div>
    </div>
  );
};
