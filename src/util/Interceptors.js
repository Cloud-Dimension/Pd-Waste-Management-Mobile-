import axios from "axios";
import ENV from "../../env";
import { getDataFromCache } from "../localStorageManager/Cache";
import { handleFailure } from "./HandleResponse";

const API_BASE_URL = ENV.API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, //10 seconds
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getDataFromCache("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Transform response data if required
    return response;
  },
  (error) => {
    if (error.response) {
      // The request was made, but the server responded with a non-2xx status code
      console.error("API Error - Status:", error.response.status);
      console.error("API Error - Data:", error.response.data);
      handleFailure(error.response.data?.error?.details ?? "Sorry!Something went wrong")
    } else if (error.request) {
      // The request was made, but no response was received
      handleFailure("Sorry!It took unexpected time to get response,please check your network")
      console.error("API Error - No Response:", error.request);
    } else {
      // Something else happened while setting up the request or handling the response
      console.error("API Error:", error.message);
      handleFailure(error.message ?? "Sorry! Something went wrong")
    }
    return Promise.reject(error);
  }
);
