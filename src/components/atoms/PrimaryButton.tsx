import { Button } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  classname?: string;
  onClick?: () => void;
  children: ReactNode;
  type?: string;
};

export const PrimaryButton = (props: Props) => {
  const { children, classname, onClick, type } = props;
  return (
    <Button variant="outlined" className={classname} onClick={onClick}>
      {children}
    </Button>
  );
};
