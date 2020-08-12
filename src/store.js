import { createStore, action } from "easy-peasy";

const data = [
  { date: "27.08.2017", name: "DAY1", val1: 10, val2: 10, val3: 106 },
  { date: "28.08.2017", name: "DAY2", val1: 12, val2: 20, val3: 23 },
  { date: "29.08.2017", name: "DAY3", val1: 17, val2: 30, val3: 87 },
  { date: "30.08.2017", name: "DAY4", val1: 15, val2: 40, val3: 134 },
  { date: "31.08.2017", name: "DAY5", val1: 16, val2: 50, val3: 55 },
];

const normalizeData = data.reduce((a, e) => {
  const uuid= Math.random(); //smthlikeuuid
  return { ...a, [uuid]: { ...e, id: uuid } };
}, {});

export const store = createStore({
  data: normalizeData,

  setCellValue: action((state, payload) => {
    state.data = {
      ...state.data,
      [payload.id]: {
        ...state.data[payload.id],
        [payload.column]: payload.newValue,
      },
    };
  })
});