// services/api.js

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getPortfolio = async () => {
  const response = await API.get("/api/portfolio");
  return response.data;
};

export default API;