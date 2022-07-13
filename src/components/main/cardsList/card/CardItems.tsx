import React from 'react';
import { Card } from '../../../../types';
import MyButton from '../../../UI/button/MyButton';
import './CardItems.css';

const CardItems = (props: Card) => {
  return (
    <div className="card">
      <div className="card__content">
        <h3>{props.card.name}</h3>
        <p>Количество: {props.card.count}</p>
        <p>Год выпуска: {props.card.year}</p>
        {/* <div className='card__image'>
          <img src={`${props.card.image}`} alt='basket' />
        </div> */}
        <p>Цвет: {props.card.color}</p>
        <p>Размер: {props.card.size}</p>
        <p>Форма: {props.card.shape}</p>
      </div>
      <MyButton>В корзину</MyButton>
    </div>
  );
};

export default CardItems;
