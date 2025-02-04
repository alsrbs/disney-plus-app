import  axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: api_key,
    language: 'ko-KR'
  }
});

export default instance;