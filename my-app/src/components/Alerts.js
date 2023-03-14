import { useLoaderData } from 'react-router-dom';

import AlertBody from "./AlertBody";
import AlertQueue from "./AlertQueue";

import classes from './Alerts.module.css';

const Alerts = () => {
  const alertData = useLoaderData();

  console.log(alertData);
  return (
    <div className={classes.alertsContainer}>
      <AlertBody alertData={alertData}/>
      <AlertQueue alertData={alertData}/>
    </div>
  );
};

export default Alerts;
