import axios from 'axios';

const API = axios.create({
  baseURL: 'https://problem.comento.kr',
  headers: {
    'Accept': 'application/json',
  },
});

const readFeeds = ({ page, ord, category, limit }) => {
  return API.get(`/api/list`, { params: { page, ord, category, limit } });
};

const readFilterCategorys = () => {
  return API.get(`/api/category`);
};

const readAds = ({ page, limit }) => {
  return API.get(`/api/ads`, { params: { page, limit } });
};

const readDetailFeed = ({ id }) => {
  return API.get(`/api/view`, { params: { id } });
};

export default { readFeeds, readFilterCategorys, readAds, readDetailFeed };
