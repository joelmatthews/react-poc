import jwt_decode from "jwt-decode";
import { redirect } from "react-router-dom";

import authInstance from "./axiosInterceptors";
import AuthRestService from "../services/AuthRestService";

const authRestService = new AuthRestService();

export function getTokens() {
  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    return null;
  }

  return {
    accessToken,
    refreshToken,
  };
}

function isTokenExpired(token) {
  const decodedToken = jwt_decode(token);
  return decodedToken.exp < Date.now() / 1000;
}

function logout () {
  return redirect('/logout');
}

export async function refreshTokens() {
  const refreshUrl = authRestService.refreshUrl();
  const tokens = getTokens();

  if (isTokenExpired(tokens.accessToken)) {
    try {
      const refreshed = await authInstance.post(refreshUrl, {
        refreshtoken: tokens.refreshToken,
        accesstoken: tokens.accessToken,
      });
      localStorage.setItem("token", refreshed.data.accesstoken);
      localStorage.setItem("refreshToken", refreshed.data.refreshtoken);
    } catch (error) {
      if (error) {
        logout();
      }
      // throw json(
      //   { message: error.response.data },
      //   { status: error.response.status }
      // );
    }
  } else {
    console.log('token not expired yet');
  }
}

export function tokenLoader() {
  return getTokens();
}
