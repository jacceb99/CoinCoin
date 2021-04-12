import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export default apiClient;
