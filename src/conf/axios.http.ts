import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const API_URL: string = process.env.REACT_APP_API_URL as string;
const config: AxiosRequestConfig = {
  baseURL: API_URL
};

export default axios.create(config) as AxiosInstance;
