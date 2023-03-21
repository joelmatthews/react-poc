import { useEffect, useState } from 'react';

import { config as prodConfig } from "../config/Prod";
import { config as devConfig } from "../config/Dev";

import classes from "./AlertQueue.module.css";
import AlertThumbnail from "./AlertThumbnail";

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

const AlertQueue = ({ alertData, onSelectedAlert }) => {
  const alertsArray = alertData.data.data;
  const descending = alertsArray.sort((a, b) => {
    return +b.id - +a.id;
  });

  const [selectedAlertIndex, setSelectedAlertIndex] = useState(0);
  const [selectedAlertData, setSelectedAlertData] = useState(descending[0])


  const onSelectHandler = (index, data) => {
    setSelectedAlertIndex(index);
    setSelectedAlertData(data);
  };

  useEffect(() => {
    onSelectedAlert(selectedAlertData);
  }, [onSelectedAlert, selectedAlertData])



  let alerts = descending.map((alert, index) =>
  // just like the "baseurl" might change per enviornment, think dev-api.zeroeyes.com vs qa-api.zeroeyes.com etc
  // in different deployed versions of the application, the number of alerts to show might change as well.
  // when this comment is resolved, I'll be looking for a "config" file that contains a variable that can be changed per enviornment.
  // the environment configuration files should be named "Dev", "QA", "Prod", etc.
  // and each should have a variable that contains the number of alerts to show.
    index < config.alertQueueMax ? (
      <AlertThumbnail
        key={alert.id}
        imgSrc={alert.filename}
        alertData={{ ...alert }}
        alt={alert.id}
        index={index}
        onSelectHandler={onSelectHandler}
        selectedAlertIndex={selectedAlertIndex}
      />
    ) : null
  );

  return (
    <div className={classes.alertQueue}>
      <div className={classes.totalAlerts}>
        <span>{`Total alerts: ${descending.length || 0}`}</span>
      </div>
      {!alerts.length && (
        <div className={classes["thumbnail-placeholder"]}>
          <p>No alerts in the queue</p>
        </div>
      )}
      {alerts.length > 0 && alerts}
    </div>
  );
};

export default AlertQueue;
