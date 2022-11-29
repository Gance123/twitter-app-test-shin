import { Input } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  setAccountName: Dispatch<SetStateAction<string>>;
};
export const AccountSetting = (props: Props) => {
  const { setAccountName } = props;

  return (
    <Input
      placeholder="アカウント名"
      onChange={(e) => setAccountName(e.target.value)}
    ></Input>
  );
};
