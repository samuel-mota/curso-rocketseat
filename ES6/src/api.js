import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // configura url padrao
});

export default api;