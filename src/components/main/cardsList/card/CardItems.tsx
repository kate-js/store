import React, { useState } from 'react';

import './CardItems.css';

import { ICardItem } from '../../../../types';
import MyButton from '../../../UI/button/MyButton';

const CardItems = (props: {
  card: ICardItem;
  addToCart: (num: string) => void;
  removeFromCart: (num: string) => void;
}) => {
  const [button, setButton] = useState(false);
  const [valueButton, setValueButton] = useState('Добавить в корзину');

  const changeBasketValue = () => {
    console.log('add/remove', props.card.num);
    button ? setValueButton('Добавить в корзину') : setValueButton('В корзине');
    button ? props.removeFromCart(props.card.num) : props.addToCart(props.card.num);
    button ? setButton(false) : setButton(true);
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
      <MyButton onClick={changeBasketValue} value={button} className={button ? 'button__basket' : ''}>
        {valueButton}
      </MyButton>
    </div>
  );
};

export default CardItems;
