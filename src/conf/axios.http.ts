import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const api = 'http://192.168.30.22:5000/api/v1'; //process.env.REACT_API_URL as string;
const config: AxiosRequestConfig = {
  baseURL: api
};

export default axios.create(config) as AxiosInstance;
