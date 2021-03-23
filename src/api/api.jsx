import axios from 'axios';

const API = axios.create({
  baseURL: 'https://problem.comento.kr',
});

export const readFeeds = ({ page, ord, category, limit }) => {
  return API.get(`/api/list`, { page, ord, category, limit });
};

export const readFilterCategory = () => {
  return API.get(`/api/category`);
};

export const readAds = ({ page, limit }) => {
  // 이미지 경로 : https://cdn.comento.kr/assignment/파일명
  return API.get(`/api/ads`, { page, limit });
};

export const readDetailFeed = ({ id }) => {
  return API.get(`/api/view`, { id });
};
