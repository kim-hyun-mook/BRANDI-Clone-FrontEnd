import axios from 'axios';

const createInstance = () => {
  const instance = axios.create({
    baseURL: '주소가 들어갑니다.',
    timeout: 3000,
    headers: {
			'Content-Type': 'application/json',  
			//해당부분에는 컨텐트 타입이 바뀔수도 있어 수정할겁니다. 
    },
  });

  instance.interceptors.request.use((config) => {
    // 쿠키에서 accessToken 가져오기
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      .split('=')[1];

    if (accessToken) {
      // Authorization 헤더에 accessToken 추가
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  });

  return instance;
};

export const instance = createInstance();