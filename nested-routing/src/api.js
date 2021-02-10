import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");
export const getCoins = () => api.get("/coins");
export const getCoinDetail = (coin_id) => api.get(`/coins/${coin_id}`);
export const getCoinExchanges = (coin_id) =>
  api.get(`/coins/${coin_id}/exchanges`);
export const getCoinMarkets = (coin_id) => api.get(`/coins/${coin_id}/markets`);
