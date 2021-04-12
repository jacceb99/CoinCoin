import client from "./client";

const endpoint1 = "/coins/markets?vs_currency=usd&ids=";

const endpoint2 = "&price_change_percentage=1h%2C24h%2C7d%2C30d";

const getCoinMarketData = (coinID) =>
  client.get(endpoint1 + coinID + endpoint2);

export default { getCoinMarketData };
