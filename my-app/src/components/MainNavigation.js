import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';


const MainNavigation = () => {
    return (
        <nav className={classes['main-nav']}>
            <ul className={classes['list-of-links']}>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="alerts" className={({isActive}) => isActive ? classes.active : undefined}>Alerts</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default MainNavigation;