import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import Gallery from "./components/Gallery";
import bakeryImg from './assests/bake.jpeg';
import classes from './components/Layout/Header.module.css';
import HeaderCartButton from "./components/Layout/HeaderCartButton";
import { Route, Switch } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <header className={classes.header}>
        <LinkContainer to="/">
          <Navbar.Brand className={classes.title}><h1>Anna's Bakery</h1></Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link className={classes.content}><h4>About Us</h4></Nav.Link>
        </LinkContainer>
        <LinkContainer to="/menu">
          <Nav.Link className={classes.content}><h4>Menu</h4></Nav.Link>
        </LinkContainer>
        <LinkContainer to="/gallery">
          <Nav.Link className={classes.content}><h4>Gallery</h4></Nav.Link>
        </LinkContainer>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={bakeryImg} alt='A table of breads' />
      </div>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/menu'>
          <main>
            <Meals />
          </main>
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
