import axios from "axios";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const axiosInstance = axios.create({
  baseURL: "https://your-api-server.com", // 백엔드 주소 수정 필요!!!!!!!!!!!!
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
