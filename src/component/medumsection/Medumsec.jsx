import React from "react";
import "./medums.css";
export const Medumsec = () => {
  return (
    <div className="medcont">
      <div className="medtitel">
        <h3>التسميع الشفهي والوظائف</h3>
      </div>
      <div className="stunam">جدول</div>
      <div className="medbout">
        <div className="lef">
          <div>
            <button className="b">منح نقطة</button>
          </div>
          <div>
            <button className="b">bb</button>
          </div>
          <div>
            <button className="b">bb</button>
          </div>
          <div>
            <select className="s"></select>
          </div>
        </div>
        <div className="riht">
          <div>
            <button className="b">منح نقطة</button>
          </div>
          <div>
            <button className="b">حسم نقطة</button>
          </div>
          <div>
            <button className="b">غياب</button>
          </div>
          <div>
            <button className="b">عدم كتابة وظيفة</button>
          </div>
        </div>
      </div>
    </div>
  );
};
