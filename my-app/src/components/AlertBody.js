import { useFetcher } from "react-router-dom";

import { config as prodConfig } from "../config/Prod";
import { config as devConfig } from "../config/Dev";

import AlertRestService from "../services/AlertRestService";
import authInstance from "../util/axiosInterceptors";
import { refreshTokens } from "../util/auth";

import classes from "./AlertBody.module.css";
import Canvas from "./Canvas";

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

const alertRestService = new AlertRestService();
const alertsUrl = alertRestService.alertsUrl();

const AlertBody = ({ selectedAlert }) => {
  const fetcher = useFetcher();

  const draw = (context) => {
    const alertImage = new Image();
    alertImage.src = selectedAlert.filename;
    alertImage.id = selectedAlert.id;
    alertImage.alt = `Alert: ${selectedAlert.id}`;
    alertImage.onload = function () {
      context.clearRect(0, 0, 640, 360);
      context.drawImage(alertImage, 0, 0, 640, 360);
    };
  };

  return (
    <div className={classes.alertBody}>
      <h3>{`Alert:${selectedAlert.id} / Client: ${selectedAlert.client.name} / Camera: ${selectedAlert.camera.name}`}</h3>
      <Canvas
        width={config.alertCanvasWidth}
        height={config.alertCanvasHeight}
        draw={draw}
      />
      {/* move these to env config mentioned in comments */}
      <div className={classes["alertBody-button-container"]}>
        <div className={classes["dispatch-button-container"]}>
          <button>Dispatch</button>
        </div>
        <fetcher.Form method="put" action="/alerts">
          <div>
            <input
              type="hidden"
              name="selectedAlert"
              value={JSON.stringify(selectedAlert)}
            />
            <button>False Positive</button>
          </div>
        </fetcher.Form>
        <div>
          <button>Clear Alerts</button>
        </div>
      </div>
    </div>
  );
};

export default AlertBody;

export const action = async ({ request, params }) => {
  refreshTokens();
  const formData = await request.formData();
  const alertData = formData.get("selectedAlert");
  const alert = JSON.parse(alertData);

  console.log(alert);

  if (request.method === "put" || request.method === "PUT") {
    try {
      const response = await authInstance.put(alertsUrl, {
        id: alert.id,
        starttime: alert.starttime,
        alerttime: alert.alerttime,
        endtime: alert.endtime,
        filename: alert.filename,
        presignedurl: alert.presignedurl,
        metricid: alert.metricid,
        createdat: alert.createdat,
        errored: alert.errored,
        alertcleared: alert.alertcleared,
        falsepositive: true,
        lawenforcement: alert.lawenforcement,
        nonlethal: alert.nonlethal,
        dispatched: alert.dispatched,
        dispatchcleared: alert.dispatchcleared,
        cameraid: alert.cameraid,
        clientid: alert.clientid,
        tags: alert.tags,
      });

      console.log(response);
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
  return null;
};
