
import classes from './AlertQueue.module.css';
import AlertThumbnail from './AlertThumbnail';

const AlertQueue = ({alertData}) => {
    const alertsArray = alertData.data.data;
    const descending = alertsArray.sort((a, b) => { return +b.id - +a.id});
    console.log(descending);


    return (
        <div className={classes.alertQueue}>
            <div className={classes.totalAlerts}><span>{`Total alerts: ${descending.length || 0}`}</span></div>
            {!descending.length && <div className={classes['thumbnail-placeholder']}><p>No alerts in the queue</p></div>}
            {descending.length > 0 && descending.map((alert, index) => index <= 4 ? <AlertThumbnail key={alert.id} imgSrc={alert.filename} alertData={{...alert}}/> : null)}
        </div>
    )
};

export default AlertQueue;