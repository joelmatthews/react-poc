import axios from "axios";

import { getAuthToken } from "./auth";

//Axios Auth Interceptor to Add JWT to an instance of Axios to be used when auth is required
const authInstance = axios.create();

const authInterceptor = (instance) => {
    instance.interceptors.request.use(
      (config) => {
        const token = getAuthToken();
  
        if (!token) {
          return;
        }
  
        config.headers["Authorization"] = `Bearer ${token}`;
  
        return config;
      },
      (error) => {
        console.log(error.request);
      }
    );
  };

authInterceptor(authInstance);

export default authInstance;