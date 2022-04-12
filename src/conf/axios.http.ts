import axios,{AxiosInstance, AxiosRequestConfig} from "axios";

const config:AxiosRequestConfig ={
    baseURL: process.env.REACT_API_URL as string
} 

export default axios.create(config) as AxiosInstance;