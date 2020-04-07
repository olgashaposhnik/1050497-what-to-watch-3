import axios from "axios";

const Error = {
  UNAUTHORIZED: 401
};

const TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw err; // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
