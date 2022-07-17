import { useState } from 'react';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const [cart, setCart] = useState<Array<string>>([]);

  const addToCart = (num: string) => {
    setCart([...cart, num]);
  };

  const removeFromCart = (numToRemove: string) => {
    setCart(cart.filter((num) => num !== numToRemove));
  };
  return (
    <div className="App">
      <Header cartLength={cart.length} />
      <Main addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
      <Footer />
    </div>
  );
}

export default App;
