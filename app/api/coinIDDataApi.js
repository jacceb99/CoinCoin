import client from "./client";

const endpoint = "/coins/list";

const getCoinIDData = () => client.get(endpoint);

export default { getCoinIDData };
