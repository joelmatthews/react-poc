import { Form } from "react-router-dom";

import { config as prodConfig } from "../config/Prod";
import { config as devConfig } from "../config/Dev";

import classes from "./AlertBody.module.css";
import Canvas from "./Canvas";

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

const AlertBody = ({ selectedAlert }) => {
  const draw = (context) => {
    const alertImage = new Image();
    alertImage.src = selectedAlert.filename;
    alertImage.id = selectedAlert.id;
    alertImage.alt = `Alert: ${selectedAlert.id}`;

    context.clearRect(0, 0, 640, 360);
    context.drawImage(alertImage, 0, 0, 640, 360);
  };
  return (
    <div className={classes.alertBody}>
      <h3>{`Alert:${selectedAlert.id} / Client: ${selectedAlert.client.name} / Camera: ${selectedAlert.camera.name}`}</h3>
      <Canvas width={config.alertCanvasWidth} height={config.alertCanvasHeight} draw={draw} /> 
      {/* move these to env config mentioned in comments */}
      <div className={classes['alertBody-button-container']}>
        <div className={classes['dispatch-button-container']}>
          <Form>
            <button>Dispatch</button>
          </Form>
        </div>
        <div>
          <Form>
            <button>False Positive</button>
          </Form>
        </div>
        <div>
          <Form>
            <button>Clear Alerts</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AlertBody;
