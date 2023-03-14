import authInstance from "./axiosInterceptors";

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
  const tokens = getTokens();

  const refreshed = await authInstance.post("https://dev-api.zeroeyes.com/api/v1/Account/RefreshToken", {
    refreshtoken: tokens.refreshToken,
    accesstoken: tokens.accessToken
  });

  localStorage.setItem('token', refreshed.data.accesstoken);
  localStorage.setItem('refreshToken', refreshed.data.refreshtoken);
};

export function tokenLoader() {
    return getTokens();
}





