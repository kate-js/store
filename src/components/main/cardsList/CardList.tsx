import { ICardItem } from '../../../types';
import CardItem from './card/CardItem';

const CardList = (props: {
  card: ICardItem[];
  addToCart: (num: string) => void;
  removeFromCart: (num: string) => void;
  cart: string[];
}) => {
  return (
    <div className="card__section">
      {props.card.length !== 0 ? (
        props.card.map((card: ICardItem) => (
          <CardItem
            card={card}
            key={card.num}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            cart={props.cart}
          />
        ))
      ) : (
        <h3>Извините, совпадений не обнаружено!</h3>
      )}
    </div>
  );
};

export default CardList;
