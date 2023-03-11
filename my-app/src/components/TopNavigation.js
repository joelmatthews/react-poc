import { useSubmit, useRouteLoaderData } from "react-router-dom";
import classes from "./TopNavigation.module.css";

const TopNavigation = () => {
  const token = useRouteLoaderData('root');
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
        {token && <button onClick={logoutHandler}>Log out</button>}
      </div>
    </nav>
  );
};

export default TopNavigation;
