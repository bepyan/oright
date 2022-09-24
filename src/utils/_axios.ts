import axios, { AxiosInstance } from 'axios';

const _axios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 10000,
  withCredentials: true,
});

_axios.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
      ...config.headers,
    },
  }),
  (error) => {
    return Promise.reject(error);
  },
);

_axios.interceptors.response.use(
  (res) => {
    if (process.env.NODE_ENV === 'development') {
      console.groupCollapsed(
        `[ ${res.config.method?.toUpperCase()} ${res.status} ] ${res.config.url}`,
      );
      console.log(res.data);
      console.groupEnd();
    }
    return res;
  },
  (error) => {
    console.log(`[ Error ] ${error.message}`, error.config);
    return Promise.reject(error.response.data);
  },
);

export default _axios;
