import React from "react";
import "./rights.css";
import DataTable from "react-data-table-component";
export const Rightsec = () => {
  const columns = [
    {
      name: "الإسم",
      selector: (row) => row.name,
    },
    {
      name: "النقاط",
      selector: (row) => row.grad,
    },
  ];
  const data = [
    {
      id: 1,
      name: "ahmed",
      grad: "25",
    },
    {
      id: 2,
      name: "mohamed",
      grad: "25",
    },
    {
      id: 3,
      name: "noor",
      grad: "25",
    },
    {
      id: 4,
      name: "ahmed",
      grad: "25",
    },
    {
      id: 5,
      name: "mohamed",
      grad: "25",
    },
    {
      id: 6,
      name: "noor",
      grad: "25",
    },
    {
      id: 7,
      name: "ahmed",
      grad: "25",
    },
    {
      id: 8,
      name: "mohamed",
      grad: "25",
    },
    {
      id: 9,
      name: "noor",
      grad: "25",
    },
    {
      id: 10,
      name: "ahmed",
      grad: "25",
    },
    {
      id: 11,
      name: "mohamed",
      grad: "25",
    },
    {
      id: 12,
      name: "mohamed",
      grad: "25",
    },
    {
      id: 13,
      name: "noor",
      grad: "25",
    },
    {
      id: 14,
      name: "ahmed",
      grad: "25",
    },
    {
      id: 15,
      name: "mohamed",
      grad: "25",
    },
    {
      id: 16,
      name: "noor",
      grad: "25",
    },
    {
      id: 17,
      name: "ahmed",
      grad: "25",
    },
    {
      id: 18,
      name: "mohamed",
      grad: "25",
    },
  ];
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#71b5fc", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "2px", // override the cell padding for head cells
        paddingRight: "2px",
      },
    },
    cells: {
      style: {
        paddingLeft: "2px", // override the cell padding for data cells
        paddingRight: "2px",
      },
    },
  };

  return (
    <div className="rigconta">
      <div className="titlreight">
        <div className="lo">
          <div className="bo">
            <button className="bo">مؤجل</button>
          </div>
          <div className="vo">
            <button className="vo">تم</button>
          </div>
        </div>
        <div className="ro">
          <div className="t">عنوان الدرس:الشبكات</div>
          <div className="st">
            <select className="st"></select>
          </div>
        </div>
      </div>
      <div className="allstudent">
        <div className="d1">
          <DataTable
            className="d"
            columns={columns}
            data={data}
            selectableRows
            striped
          >
            {" "}
          </DataTable>
        </div>
        <div className="d2">
          <DataTable
            className="d"
            columns={columns}
            data={data}
            selectableRows
            striped
            customStyles={customStyles}
          >
            {" "}
          </DataTable>
        </div>
      </div>
    </div>
  );
};
