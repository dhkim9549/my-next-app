import { useEffect, useState } from "react";

async function getRcmdProdData() {
  return [];
}

export default function ProdPanel({ queryObj }) {
  let [rcmdItems, setRcmdItems] = useState([]);

  useEffect(() => {
    console.log({ queryObj });
    setRcmdItems([]);
    getRcmdProdData(queryObj).then((x) => {
      console.log("x = " + JSON.stringify(x));
    });
  }, [queryObj]);

  return (
    <div>
      {rcmdItems && (
        <div className="m-4 p-4">{rcmdItems.length} 건이 조회되었습니다.</div>
      )}
      <div className="m-4 flex flex-wrap gap-3">
        {rcmdItems.map((x) => (
          <Paper className="w-full lg:w-96 bg-white p-4 flex flex-col gap-2">
            <div className="text-slate-800 text-2xl mt-5 mb-2">
              {prodInfo.rcmdProdNm}
            </div>
            <div className="text-slate-900">
              추천순위: {prodObj.rcmdProrRnk}
            </div>
            <div className="text-slate-900">
              보증구분코드: {prodObj.grntDvcd}
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
}
