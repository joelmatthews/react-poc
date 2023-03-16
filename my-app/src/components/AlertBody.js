import classes from "./AlertBody.module.css";

const AlertBody = ({ selectedAlert }) => {
  return (
    <div className={classes.alertBody}>
      <h3>{`Alert:${selectedAlert.id} / Client: ${selectedAlert.client.name} / Camera: ${selectedAlert.camera.name}`}</h3>
      <canvas
        className={classes.alertCanvas}
        height="360px"
        width="640px"
      ></canvas>
    </div>
  );
};

export default AlertBody;
