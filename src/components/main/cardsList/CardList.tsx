import { ICardList } from '../../../types';
import { CardItem } from './card/CardItem';

export const CardList = ({ cards, addToCart, removeFromCart, cart }: ICardList) => {
  return (
    <div className="card__section">
      {cards.length !== 0 ? (
        cards.map((item) => (
          <CardItem
            item={item}
            key={Number(item.num)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />
        ))
      ) : (
        <h3>Извините, совпадений не обнаружено!</h3>
      )}
    </div>
  );
};
