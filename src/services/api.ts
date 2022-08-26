import axios from "axios";

const Api = axios.create({
  baseURL: "https://ubc.up.railway.app",
});

Api.interceptors.request.use((config: any) => {
  Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  try {
    const token = localStorage.getItem("jwt");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.error(error);
  }
});

export default Api;
