import client from "./client";

const endpoint =
  "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d";

const getCoinMarketOrder = () => client.get(endpoint);

export default { getCoinMarketOrder };
