import React from 'react';
import { Card } from '../../../../types';
import MyButton from '../../../UI/button/MyButton';
import './CardItems.css';

const CardItems = (props: Card) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <h3>{props.card.title}</h3>
        <p>{props.card.category}</p>
        <p>{props.card.description}</p>
        <div className='card__image'>
          <img src={`${props.card.image}`} alt='basket' />
        </div>
        <p>Цена: {props.card.price}</p>
        <p>Рейтинг: {props.card.rating.count}</p>
        <p>Количество отзывов: {props.card.rating.rate}</p>
      </div>
      <MyButton>В корзину</MyButton>
    </div>
  );
};

export default CardItems;
