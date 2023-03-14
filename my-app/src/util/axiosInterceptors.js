import axios from "axios";

import { getTokens } from "./auth";

//Axios Auth Interceptor to Add JWT to an instance of Axios to be used when auth is required
const authInstance = axios.create();

const authInterceptor = (instance) => {
    instance.interceptors.request.use(
      (config) => {
        const tokens = getTokens();
  
        if (!tokens) {
          return;
        }
  
        config.headers["Authorization"] = `Bearer ${tokens.accessToken}`;
  
        return config;
      },
      (error) => {
        console.log(error.request);
      }
    );
  };

authInterceptor(authInstance);

export default authInstance;