/*
 * http://24.144.81.34:3001/api/get-stock-info?stockNm=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90
 *
 */

'use server'

import { tabletojson } from "tabletojson";

export async function getStockInfo(query) {

  console.info("getStockInfo() start...");
  console.info({ query });

  let resData = await main(query?.stockNm);

  console.info("getStockInfo() end...");

  return resData;
}

let apiUrl =
  "https://api.scraperapi.com/?api_key=a6feef9544ee61c2d5b078836ca638f4&url=https%3A%2F%2Ffinance.naver.com%2Fsise%2Fsise_market_sum.naver";

async function main(query) {

  console.info("main() start...");
  console.info({ query });

  let table = "";
  await tabletojson.convertUrl(apiUrl, function (tablesAsJson) {
    table = tablesAsJson[1];
  });

  console.info({ table });

  let table2 = table.filter(function (e) {
    return e?.종목명?.startsWith(query);
  });

  console.info({ table2 });
  console.info("main() end...");

  return table2;
}
