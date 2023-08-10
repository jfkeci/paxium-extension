import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL ?? `http://localhost:12273`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
