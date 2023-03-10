import { useSubmit } from "react-router-dom";
import classes from "./TopNavigation.module.css";

const TopNavigation = () => {
  const submit = useSubmit();

  const logoutHandler = () => {
    submit(null, {method: 'post', action: '/logout'})

  }


  return (
    <nav className={classes.topNav}>
      <div className={classes.navFlexItem}>
        <img src="/ze-horiz-logo-200x30xxxhdpi.png" alt="ZeroEyes logo"/>
      </div>
      <div className={classes.navFlexItem}>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </nav>
  );
};

export default TopNavigation;
