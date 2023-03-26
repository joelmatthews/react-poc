import authInstance from "./axiosInterceptors";
import AuthRestService from "../services/AuthRestService";

const authRestService = new AuthRestService();

export function getTokens() {
  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    return null;
  }

  return {
    accessToken,
    refreshToken
  }
}

export async function refreshTokens () {
  const refreshUrl = authRestService.refreshUrl();

  const tokens = getTokens();

  const refreshed = await authInstance.post(refreshUrl, {
    refreshtoken: tokens.refreshToken,
    accesstoken: tokens.accessToken
  });

  localStorage.setItem('token', refreshed.data.accesstoken);
  localStorage.setItem('refreshToken', refreshed.data.refreshtoken);
};

export function tokenLoader() {
    return getTokens();
}





