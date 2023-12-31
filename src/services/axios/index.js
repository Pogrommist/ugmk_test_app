import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? 'http://localhost:3001/',
  timeout: 30000,
  headers: {'Content-Type': 'application/json'}
});