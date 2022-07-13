import { ICard, ICardItem } from '../../../types';
import CardItems from './card/CardItems';

const CardList = (props: ICard) => {
  return (
    <div className='card__section'>
      {props.card.length !== 0 ? (
        props.card.map((card: ICardItem) => <CardItems card={card} key={card.id} />)
      ) : (
        <h3>К сожалению, нет товара, соответствующего вашим фильтрам!</h3>
      )}
    </div>
  );
};

export default CardList;
