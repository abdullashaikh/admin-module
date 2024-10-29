// src/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://portfoback.vercel.app/api/content/',
  timeout: 10000,
});

export default axiosInstance;
