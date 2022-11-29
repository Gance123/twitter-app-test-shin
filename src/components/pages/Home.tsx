import React from "react";
import { SideBar } from "../organisms/sidebar/SideBar";
import { TimeLine } from "../organisms/timeline/TimeLine";
import { Widget } from "../organisms/widget/Widget";

type Props = {
  accountName: string;
};

export const Home = (props: Props) => {
  const { accountName } = props;
  return (
    <div className="home">
      <SideBar />
      <TimeLine/>
      <Widget />
    </div>
  );
};
