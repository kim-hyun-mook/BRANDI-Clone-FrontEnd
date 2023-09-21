import axios from 'axios';

const createInstance = () => {
  const config = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const instance = axios.create(config);

  instance.interceptors.request.use((config) => {
    if (config.url.includes('/login') || config.url.includes('/signup')) {
      const accessToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('accessToken='))
        .split('=')[1];

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }

    return config;
  });

  return instance;
};

export const axiosInstance = createInstance();
