import { Form } from "react-router-dom";

import classes from "./AlertBody.module.css";
import Canvas from "./Canvas";

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
      <Canvas width={"640px"} height={"360px"} draw={draw} />
      <div className={classes["alertBody-button-container"]}>
        <div className={classes["dispatch-button-container"]}>
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
