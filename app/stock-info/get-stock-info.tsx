/*
 * http://24.144.81.34:3001/api/get-stock-info?stockNm=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90
 *
 */

"use server"

export async function getStockInfo(query) {

  console.info("getStockInfo() start...");
  console.info({ query });

  let resData = await main(query?.stockNm);

  console.info("getStockInfo() end...");

  return resData;
}

let apiUrl = "http://localhost:3001/api/get-stock-info";

async function main(query) {

  console.info("main() start...");
  console.info({ query });

  let res = await fetch(apiUrl + "?stockNm=" + query, {
    next: { revalidate: 60 },
  });

  let table = await res.json();
  console.info(Object.prototype.toString.call(table));

  console.info({ table });

  console.info("main() end...");

  return table;
}
