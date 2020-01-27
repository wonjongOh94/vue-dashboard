import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
export const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};

export const fetchUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

export const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

// export default로 하면 import문에서 비구조화 할당이 되지 않는다. 
// export {
//   fetchNewsList,
// };
