import { useEffect, useState } from "react";

import { getRentRate } from "./get-rent-rate";

import Paper from "@mui/material/Paper";

export default function ProdPanel({ queryObj }) {
  let [rentRateArr, setRentRateArr] = useState([]);

  useEffect(() => {
    console.log({ queryObj });
    setRentRateArr();
    getRentRate(queryObj).then((x) => {
      console.log({ x });
      setRentRateArr(x);
    });
  }, [queryObj]);

  return (
    <div>
      <div className="m-4 p-4">
        {rentRateArr == null
          ? "조회중입니다..."
          : rentRateArr?.length + " 건이 조회되었습니다."}
      </div>
      <div className="m-4 flex flex-wrap gap-3">
        {rentRateArr?.map((x) => (
          <Paper
            className="w-full lg:w-96 bg-white p-4 flex flex-col gap-2"
            key={x.금융기관}
          >
            <div className="text-slate-800 text-2xl mt-5 mb-2">{x.금융기관}</div>
            <div className="text-slate-900">적용금리: {x.적용금리}</div>
            <div className="text-slate-900">고객센터: {x.고객센터}</div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
