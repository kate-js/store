import React, { useState } from 'react';

import './CardItems.css';

import { ICardItem } from '../../../../types';
import MyButton from '../../../UI/button/MyButton';

const CardItems = (props: {
  card: ICardItem;
  addToCart: (num: string) => void;
  removeFromCart: (num: string) => void;
  cart: string[];
}) => {
  const [valueButton, setValueButton] = useState('Добавить в корзину');

  const changeBasketValue = () => {
    console.log(props.cart.length);
    if (props.cart.includes(props.card.num)) {
      props.removeFromCart(props.card.num);
      setValueButton('Добавить в корзину');
    } else if (props.cart.length + 1 > 5) {
      alert(`Корзина переполнена(максимум 5 товаров)`);
      props.removeFromCart(props.card.num);
      setValueButton('Добавить в корзину');
    } else {
      setValueButton('В корзине');
      props.addToCart(props.card.num);
    }
  };

  return (
    <div className="card">
      <div className="card__content">
        <h3>{props.card.name}</h3>
        <p>Цвет: {props.card.color}</p>
        <p>Размер: {props.card.size}</p>
        <p>Форма: {props.card.shape}</p>
        <p>Количество: {props.card.count}</p>
        <p>Год выпуска: {props.card.year}</p>
        <p>Производитель: {props.card.manufacturer}</p>
      </div>
      <MyButton onClick={changeBasketValue}>{valueButton}</MyButton>
    </div>
  );
};

export default CardItems;
