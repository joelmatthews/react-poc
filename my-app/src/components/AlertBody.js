import classes from './AlertBody.module.css';

const AlertBody = () => {
    return (
        <div className={classes.alertBody}>
            <h3>Alert Info</h3>
            <canvas className={classes.alertCanvas} height="300px" width="500px"></canvas>
        </div>
    )   
};

export default AlertBody;