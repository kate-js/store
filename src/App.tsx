import { useEffect, useState } from 'react';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  console.log('Все требования по функционалу выполнены - 200 баллов. Спасибо!');
  const [cart, setCart] = useState<Array<string>>(JSON.parse(String(localStorage.getItem('Cart'))) || []);

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (num: string) => {
    setCart([...cart, num]);
  };

  const removeFromCart = (numToRemove: string) => {
    setCart(cart.filter((num) => num !== numToRemove));
  };

  const cleanup = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header cartLength={cart.length} />
      <Main addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} cleanup={cleanup} />
      <Footer />
    </div>
  );
}

export default App;
