import React from "react";
import { Header } from "../header/Header";
import { Rightsec } from "../rightsection/Rightsec";
import { Medumsec } from "../medumsection/Medumsec";
import { Leftsec } from "../leftsection/Leftsec";
import "./mainpa.css";
export const Mainpage = () => {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>

      <div className="bodys">
        <div className="medum">
          <Medumsec />
        </div>

        <div className="right">
          <Rightsec />
        </div>

        <div className="left">
          <Leftsec />
        </div>
      </div>
    </div>
  );
};
