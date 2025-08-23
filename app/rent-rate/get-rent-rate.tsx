"use server";

export async function getRentRate(query) {
  console.info("getRentRate() start...");
  console.info({ query });

  let resData = await main(query?.bnkNm);

  console.info("getRentRate() end...");

  return resData;
}

let apiUrl = (process.env.API_SERVER_URL || "http://localhost:3001") + "/api/get-loan-rate";
console.log({apiUrl});

async function main(query) {
  console.info("main() start...");
  console.info({ query });

  let res = await fetch(apiUrl + "?bnkNm=" + query, {
    next: { revalidate: 600 },
  });

  let table = await res.json();
  console.info(Object.prototype.toString.call(table));

  console.info({ table });

  console.info("main() end...");

  return table;
}
