import { ICardItem } from '../../../types';
import CardItems from './card/CardItems';

const CardList = (props: {
  card: ICardItem[];
  addToCart: (num: string) => void;
  removeFromCart: (num: string) => void;
  cartFull: boolean;
}) => {
  return (
    <div className="card__section">
      {props.card.length !== 0 ? (
        props.card.map((card: ICardItem) => (
          <CardItems
            card={card}
            key={card.num}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            cartFull={props.cartFull}
          />
        ))
      ) : (
        <h3>К сожалению, нет товара, соответствующего вашим фильтрам!</h3>
      )}
    </div>
  );
};

export default CardList;
