import React from "react";
import ava from "../../assets/img/ava/eee.png";
import "./lefts.css";
export const Leftsec = () => {
  return (
    <div className="lefcont">
      <div className="title">
        <h3>فارس الصَّف</h3>
      </div>

      <div className="imagef">
        <img src={ava} alt="" />
      </div>

      <div className="texttha">
        <p>
          كَالنَّجْمِ نَرْقَبُهُ عَلَا بِسطُوعِ مَنْ ذَا ينالُ صَدَارَةَ
          الأُسْبُوعِ
        </p>
      </div>
    </div>
  );
};
