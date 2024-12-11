import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-service-1091173744770.us-east1.run.app', // Backend URL
});

export default api;