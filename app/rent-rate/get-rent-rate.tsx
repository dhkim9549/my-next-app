"use server"

import { tabletojson } from "tabletojson";

export async function getRentRate(query) {

  console.info("getRentRate() start...");
  console.info({ query });

  let resData = await main(query?.bnkNm);

  console.info("getRentRate() end...");

  return resData;
}

let apiUrl = "http://24.144.81.34:3001/api/get-loan-rate";

async function main(query) {

  console.info("main() start...");
  console.info({ query });

  let res = await fetch(apiUrl
    + "?bnkNm=" + query,
    { next: { revalidate: 600 } }
  );

  let table = await res.json();
  console.info(Object.prototype.toString.call(table));

  console.info({ table });

  console.info("main() end...");

  return table;
}
