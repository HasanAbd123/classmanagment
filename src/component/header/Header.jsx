import React from "react";
import "./head.css";
import ava from "../../assets/img/ava/eee.png";
export const Header = () => {
  return (
    <div className="hh">
      <div className="date">12/7/2024</div>
      <div className="logo">
        <div className="n">اسم المدرس</div>
        <div className="l">
          {" "}
          <img src={ava} alt="" />
        </div>
      </div>
    </div>
  );
};
