import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { useState } from 'react';
import CartProvider from "./store/CartProvider";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Gallery from "./pages/Gallery/Gallery";

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
      <Header onShowCart={showCartHandler} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </CartProvider>

  );
}

export default App;
