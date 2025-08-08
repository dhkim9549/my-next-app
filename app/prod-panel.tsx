import { useEffect, useState } from "react";

import { getStockInfo } from './get-stock-info';

import Paper from '@mui/material/Paper';

export default function ProdPanel({ queryObj }) {
  let [rcmdItems, setRcmdItems] = useState([]);

  useEffect(() => {
    console.log({ queryObj });
    setRcmdItems([]);
    getStockInfo(queryObj).then((x) => {
      console.log({x});
      setRcmdItems(x);
    });
  }, [queryObj]);

  return (
    <div>
      {rcmdItems && (
        <div className="m-4 p-4">{rcmdItems.length} 건이 조회되었습니다.</div>
      )}
      <div className="m-4 flex flex-wrap gap-3">
        {rcmdItems.map((x) => (
          <Paper className="w-full lg:w-96 bg-white p-4 flex flex-col gap-2" key={x.종목명}>
            <div className="text-slate-800 text-2xl mt-5 mb-2">
              {x.종목명}
            </div>
            <div className="text-slate-900">
              현재가: {x.현재가}
            </div>
            <div className="text-slate-900">
              등락률: {x.등락률}
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
