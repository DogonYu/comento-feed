import axios from 'axios';

const API = axios.create({
  baseURL: 'https://problem.comento.kr',
  headers: {
    'Accept': 'application/json',
  },
});

export const readFeeds = ({ page, ord, category, limit }) => {
  return API.get(`/api/list`, { params: { page, ord, category, limit } });
};

export const readFilterCategorys = () => {
  return API.get(`/api/category`);
};

export const readAds = ({ page, limit }) => {
  return API.get(`/api/ads`, { params: { page, limit } });
};

export const readDetailFeed = ({ id }) => {
  return API.get(`/api/view`, { params: { id } });
};
