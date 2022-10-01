import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const jokeQuantity = useSelector(state => state.favJokes.quantity);

    const location = useLocation().pathname;

    return (
        <nav className={classes['nav-wrapper']}>
            <div className={classes.logo}>
                <h1>What The</h1>
                <h1>Joke!</h1>
            </div>
            <div className={classes.navItemsWrapper}>
                <div className={`${classes.navItemWrapper} ${location === '/' ? classes.isActive : ''}`}>
                    <Link className={classes.navItemText} to='/'>Home</Link>
                </div>
                <div className={`${classes.navItemWrapper} ${location === '/favorites' ? classes.isActive : ''}`}>
                    <Link className={classes.navItemText} to='/favorites'>Favorites ({jokeQuantity})</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar