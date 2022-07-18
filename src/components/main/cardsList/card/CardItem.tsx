import './CardItem.css';

import { ICardItem } from '../../../../types';
import MyButton from '../../../UI/button/MyButton';
import Green from '../../../../assets/Green.png';
import Yellow from '../../../../assets/Yellow.png';
import Red from '../../../../assets/Red.png';
import White from '../../../../assets/White.jpeg';
import Blue from '../../../../assets/Blue.jpeg';

type pictures = {
  Green: string;
  Yellow: string;
  Blue: string;
  White: string;
  Red: string;
};

const PICTURES: pictures = {
  Green: Green,
  Yellow: Yellow,
  Blue: Blue,
  White: White,
  Red: Red,
};

const CardItem = (props: {
  card: ICardItem;
  addToCart: (num: string) => void;
  removeFromCart: (num: string) => void;
  cart: string[];
}) => {
  const changeBasketValue = () => {
    if (props.cart.includes(props.card.num)) {
      props.removeFromCart(props.card.num);
    } else if (props.cart.length + 1 > 20) {
      alert(`Корзина переполнена(максимум 20 товаров)`);
      props.removeFromCart(props.card.num);
    } else {
      props.addToCart(props.card.num);
    }
  };

  const buttonLabel = props.cart.includes(props.card.num) ? 'В корзине' : 'Добавить в корзину';

  return (
    <div className="card" data-testid="product-card">
      <div className="card__content">
        <h3>{props.card.name}</h3>
        <img src={String(PICTURES[props.card.image as keyof pictures])} alt="boll" className="card__image" />
        <p>Цвет: {props.card.color}</p>
        <p>Размер: {props.card.size}</p>
        <p>Форма: {props.card.shape}</p>
        <p>Количество: {props.card.count}</p>
        <p>Год выпуска: {props.card.year}</p>
        <p>Производитель: {props.card.manufacturer}</p>
      </div>
      <MyButton data-testid={`button-${props.card.num}`} onClick={changeBasketValue}>
        {buttonLabel}
      </MyButton>
    </div>
  );
};

export default CardItem;
