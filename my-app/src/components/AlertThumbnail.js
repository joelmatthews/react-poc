import classes from "./AlertThumbnail.module.css";

const AlertThumbnail = ({ imgSrc, alertData, alt, index, onSelectHandler, selectedAlertIndex }) => {
  const selectedStyle = classes.selected;
  const notSelectedStyle = classes.notSelected;

  return (
    <div
      className={`${classes.thumbnailContainer} ${
        index === selectedAlertIndex ? selectedStyle : notSelectedStyle
      }`}
      onClick={() => onSelectHandler(index, alertData)}
    >
      <img className={classes.thumbnailImage} src={imgSrc} alt={alt} />
    </div>
  );
};

export default AlertThumbnail;
