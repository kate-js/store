import React from 'react';
import { Card } from '../../../../types';
import './CardItems.css';

const CardItems = (props: Card) => {
  return (
    <div className='card'>
      <h3>{props.card.title}</h3>
      <span>{props.card.category}</span>
      <span>{props.card.description}</span>
      <span>{props.card.title}</span>
      <img src={`${props.card.image}`} />
      <span>{props.card.price}</span>
      <span>{props.card.rating.count}</span>
      <span>{props.card.rating.rate}</span>
    </div>
  );
};

export default CardItems;
