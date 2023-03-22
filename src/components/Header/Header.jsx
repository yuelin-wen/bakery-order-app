import React from "react";
import heroImg from "../../assets/bake.jpeg";
import CartButton from "../Cart/CartButton/CartButton";
import "./header.css";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <a href="/">
          <h1>Anna's Bakery</h1>
        </a>
        <a href="menu">
          <div>Menu</div>
        </a>
        <a href="about">
          <div>About Us</div>
        </a>
        <a href="gallery">
          <div>Gallery</div>
        </a>
        <CartButton onClick={props.onShowCart} />
      </div>
      <div className="main-image">
        <img src={heroImg} alt="hero" />
      </div>
    </>
  );
};

export default Header;
