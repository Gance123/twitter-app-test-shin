import React from "react";
import { SideBar } from "../organisms/sidebar/SideBar";
import { TimeLine } from "../organisms/timeline/TimeLine";
import { Widget } from "../organisms/widget/Widget";

export const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <TimeLine />
      <Widget />
    </div>
  );
};
