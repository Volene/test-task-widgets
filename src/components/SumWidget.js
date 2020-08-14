import React from "react";
import { useStoreState } from "easy-peasy";
import { omit } from "../utils";

export const SumWidget = () => {
  const data = Object.values(useStoreState((state) => state.data));

  const valuesData = data.map((e) =>
    Object.entries(omit(e, ["name", "date", "id"]))
  );

  const calculateColumnTotals = (obj) => {
    return obj.reduce((sumObj, el) => {
      el.forEach(([key, val]) =>
        sumObj[key] ? (sumObj[key] += val) : (sumObj[key] = val)
      );
      return sumObj;
    }, {});
  };

  const columnTotals = Object.entries(calculateColumnTotals(valuesData));

  return (
    <div className="sum_widget">
      {columnTotals.map(([key, value]) => (
        <div className="sum_widget__item item" key={key}>
          <div className="item__title">{key}</div>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
};
