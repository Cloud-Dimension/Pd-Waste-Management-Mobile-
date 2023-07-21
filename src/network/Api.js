import { axiosInstance } from "../util/Interceptors";

const HandleHttpCall = async (endpoint, method = "GET", data = null) => {
  try {
    const options = {
      method,
      url: endpoint,
      data,
    };

    const response = await axiosInstance(options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default HandleHttpCall;
