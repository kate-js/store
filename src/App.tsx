import { useState } from 'react';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

const CART_LIMIT = 5;

function App() {
  const [cart, setCart] = useState<Array<string>>([]);
  const [cartFull, setCartFull] = useState<boolean>(false);

  console.log(cart);
  const addToCart = (num: string) => {
    if (cart.length <= CART_LIMIT) {
      setCart([...cart, num]);
    } else {
      alert(`Корзина переполнена(максимум ${CART_LIMIT} товаров)`);
    }

    // if (cart.length >= 5) {
    //   setCartFull(true);
    //   alert('Корзина переполнена(максимум 20 товаров)');
    // } else {
    //   setCartFull(false);
    //   setCart([...cart, num]);
    // }
  };

  const removeFromCart = (numToRemove: string) => {
    setCart(cart.filter((num) => num !== numToRemove));
  };
  return (
    <div className="App">
      <Header cartLength={cart.length} />
      <Main addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} cartFull={cartFull} />
      <Footer />
    </div>
  );
}

export default App;
