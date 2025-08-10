"use server"

import { tabletojson } from "tabletojson";

export async function getRentRate(query) {

  console.info("getRentRate() start...");
  console.info({ query });

  let resData = await main(query?.bnkNm);

  console.info("getRentRate() end...");

  return resData;
}

let apiUrl =
  "https://hf.go.kr/ko/sub02/sub02_01_07_01.do";

async function main(query) {

  console.info("main() start...");
  console.info({ query });

  let table = "";
  await tabletojson.convertUrl(apiUrl, function (tablesAsJson) {
    table = tablesAsJson[0];
  });

  console.info({ table });

  let table2 = table.filter(function (e) {
    return e?.금융기관?.startsWith(query);
  });

  console.info({ table2 });
  console.info("main() end...");

  return table2;
}
