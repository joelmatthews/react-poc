import { json } from "react-router-dom";

import authInstance from "../util/axiosInterceptors";

import PageContent from "../components/PageContent";
import Alerts from "../components/Alerts";
import AlertsProvider from "../context/AlertsProvider";
import { refreshTokens } from "../util/auth";

const AlertsPage = () => {
  return (
    <PageContent title={null}>
      <AlertsProvider>
        <Alerts />
      </AlertsProvider>
    </PageContent>
  );
};

export async function loader() {
  refreshTokens();
  try {
    const response = await authInstance.get(
      "https://dev-api.zeroeyes.com/api/v1/Alerts"
    );
    console.log(response);
    return response;
  } catch (error) {
    throw json(
      { message: error.response.data },
      { status: error.response.status }
    );
  }
}

export default AlertsPage;
