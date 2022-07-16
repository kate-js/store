import './header.css';
import Logo from '../../assets/balls.png';
import Cart from '../../assets/cart.png';

const Header = (props: { cartLength: number }) => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <h2>Магазин елочных игрушек</h2>
      <div className="header__cart">
        <div>
          <img src={Cart} alt="cart" />
        </div>
        <div>
          <span>{props.cartLength}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
