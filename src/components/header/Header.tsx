import './header.css';
import Logo from '../../assets/balls.png';
import Cart from '../../assets/cart.png';

export const Header = ({ cartLength }: { cartLength: number }) => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <h2>Магазин елочных игрушек</h2>
      <div className="header__cart">
        <div>
          <img src={Cart} alt="cart" />
        </div>
        <div>
          <span data-testid="cart-counter">{cartLength}</span>
        </div>
      </div>
    </div>
  );
};
