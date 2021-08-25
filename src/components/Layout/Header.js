import React from "react";
import bakeryImg from '../../assests/bake.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Anna's Bakery</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={bakeryImg} alt='A table of breads' />
        </div>
    </React.Fragment >
};

export default Header;