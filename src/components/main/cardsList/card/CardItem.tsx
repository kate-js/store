import { MyButton } from '../../../UI/button/MyButton';

import { IProps, pictures } from '../../../../types';
import { PICTURES } from '../../../../data/products';

import './CardItem.css';

export const CardItem = ({ item, addToCart, removeFromCart, cart }: IProps) => {
  const changeBasketValue = () => {
    if (cart.includes(item.num)) {
      removeFromCart(item.num);
    } else if (cart.length + 1 > 20) {
      alert(`Корзина переполнена(максимум 20 товаров)`);
      removeFromCart(item.num);
    } else {
      addToCart(item.num);
    }
  };

  const buttonLabel = cart.includes(item.num) ? 'В корзине' : 'Добавить в корзину';

  return (
    <div className="card" data-testid="product-card">
      <div className="card__content">
        <h3>{item.name}</h3>
        <img src={String(PICTURES[item.image as keyof pictures])} alt="boll" className="card__image" />
        <p>Цвет: {item.color}</p>
        <p>Размер: {item.size}</p>
        <p>Форма: {item.shape}</p>
        <p>Количество: {item.count}</p>
        <p>Год выпуска: {item.year}</p>
        <p>Производитель: {item.manufacturer}</p>
      </div>
      <MyButton data-testid={`button-${item.num}`} onClick={changeBasketValue}>
        {buttonLabel}
      </MyButton>
    </div>
  );
};
