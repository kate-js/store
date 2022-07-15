import './header.css';

const Header = (props: { cartLength: number }) => {
  return (
    <div className="header">
      <ul className="header__nav">
        <li>Каталог</li>
        <li>О компании</li>
        <li>Правила</li>
        <li>Новости</li>
        <li>Контакты</li>
      </ul>
      <div className="header__cart">
        <span>{props.cartLength}</span>
      </div>
    </div>
  );
};

export default Header;
