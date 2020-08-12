import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { useStoreActions, useStoreState } from "easy-peasy";
import { capitalizeFirstLetter, omit } from "../utils";

export const Table = () => {
  
  const setCellValue = useStoreActions((actions) => actions.setCellValue);
  const data = useStoreState((state) => state.data);
  const normData=Object.entries(omit(Object.values(data)[0], ["id"]));
  
  const createColumns = (normData) => {
    const columns = normData
      .map(([key]) => {
        const capitalizedText = capitalizeFirstLetter(key);
        const column = { dataField: key, text: capitalizedText };

        if (key === "name" || key === "date") {
          return { ...column, editable: false };
        } else {
          return {
            ...column,
            validator: (newValue) =>
              isNaN(newValue)
                ? { valid: false, message: "Value should be numeric" }
                : true,
          };
        }
      })
    return columns;
  };

  const columns = createColumns(normData);

  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={Object.values(data)}
      columns={columns}
      cellEdit={cellEditFactory({
        mode: "click",
        blurToSave: true,        
        afterSaveCell: (_, newValue, row, column) => {
          newValue = Number(newValue);
          setCellValue({
            id: row.id,
            column: column.dataField,
            newValue: newValue,
          });
        },
      })}
    />
  );
};
