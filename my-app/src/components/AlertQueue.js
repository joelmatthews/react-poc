import { useEffect, useState } from 'react';
import classes from "./AlertQueue.module.css";
import AlertThumbnail from "./AlertThumbnail";

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
    index <= 4 ? (
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
