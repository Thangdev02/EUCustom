import axios from "axios";

const API_URL = "/api";

export const getAllNews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getNewsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getRelatedNews = async (id) => {
  const response = await axios.get(API_URL);
  return response.data.filter((item) => item.id !== id).slice(0, 3);
};
