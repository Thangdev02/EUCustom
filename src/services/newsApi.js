// src/services/newsApi.js
import axios from "axios";

const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "/api";

export const getAllNews = async () => {
  const res = await axios.get(`${API_BASE}/news`);
  return res.data;
};

export const getNewsById = async (id) => {
  const res = await axios.get(`${API_BASE}/news/${id}`);
  return res.data;
};

export const getRelatedNews = async (id) => {
  const res = await axios.get(`${API_BASE}/news`);
  const all = res.data;
  return all.filter((item) => item.id !== id).slice(0, 3);
};
