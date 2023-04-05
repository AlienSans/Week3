import "./Table.css";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

import Form from "../form/Form";

function Table({ data, onCreate, onDelete, onUpdate }) {
  const [columns, setColums] = useState([
    { field: "id", width: 80, editable: false },
    { field: "name", width: 200 },
    { field: "email", width: 300 },
    { field: "website", width: 200 },
  ]);

  const action = [
    {
      field: "action",
      width: 200,
      editable: false,
      cellRenderer: function (params) {
        return (
          <div className="cellAction">
            <div
              className="actionBtnUpdate"
              onClick={() => onUpdate(params.data)}
            >
              Update
            </div>
            <div
              className="actionBtnDelete"
              onClick={() => onDelete(params.data.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      //   resizable: true,
      editable: true,
      //   sortable: true,
      //   flex: 1,
    }),
    []
  );

  return (
    <div className="DataTable">
      <div className="ag-theme-alpine" style={{ height: 500, width: 1200 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columns.concat(action)}
          defaultColDef={defaultColDef}
        />
      </div>
      <Form user={data} onCreate={onCreate} />
    </div>
  );
}

export default Table;
