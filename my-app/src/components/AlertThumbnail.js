import classes from './AlertThumbnail.module.css';

const AlertThumbnail = ({imgSrc}) => {
    return (
        <div className={classes.thumbnailContainer}>
            <img className={classes.thumbnailImage} src={imgSrc} alt="alert"/>
        </div>
    )
};

export default AlertThumbnail;