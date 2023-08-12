import { axiosInstance } from '../utils/config/axios.configs';

/* LoginUserRequestParams { 
  email: string; 
  password: string;
  appToken: string;
} */
export const login = async (data) /* : Promise<User> */ => {
  const res = await axiosInstance.post('/api/auth/login', data);

  return res.data?.data;
};

/* RegisterUserRequestParams {
  email: string;
  username?: string;
  password: string;
  confirmPassword: string;
  appToken: string;
} */
export const register = async (data) /* : Promise<User> */ => {
  const res = await axiosInstance.post('/api/auth/register', data);
  return res.data?.data;
};
