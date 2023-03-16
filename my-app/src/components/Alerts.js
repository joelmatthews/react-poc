import { useState } from 'react';

import { useLoaderData } from "react-router-dom";

import AlertBody from "./AlertBody";
import AlertQueue from "./AlertQueue";

import classes from "./Alerts.module.css";

const Alerts = () => {
  const alertData = useLoaderData();

  const [selectedAlert, setSelectedAlert] = useState(alertData.data.data[alertData.data.data.length - 1]);

  const onSelectedAlert = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className={classes.alertsContainer}>
      <AlertBody alertData={alertData} selectedAlert={selectedAlert}/>
      <AlertQueue alertData={alertData} onSelectedAlert={onSelectedAlert} />
    </div>
  );
};

export default Alerts;
