import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";

export const host = __DEV__ ? 'https://api.openweathermap.org' : 'https://api.openweathermap.org';

let axiosInstance = axios.create({
  baseURL: host
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';


function network() {
  return new Promise((resolve, reject) => {
    NetInfo.fetch().then(state => {
      resolve(state.isConnected)
    });
  });
}


axiosInstance.interceptors.request.use(async (config) => {
  /** In dev, intercepts request and logs it into console for dev */
  if (await network()) {
    return config;
  } else {
    return Promise.reject('The Internet connection appears to be offline.');
  }
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error);


});

export default axiosInstance;