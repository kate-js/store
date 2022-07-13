import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src='../../../assets/logo.svg' />
      <ul className='header__nav'>
        <li>Каталог</li>
        <li>О компании</li>
        <li>Правила</li>
        <li>Новости</li>
        <li>Контакты</li>
      </ul>
      <div className='header__basket'>
        <img src='../../../assets/basket.png' />
        <span>1</span>
      </div>
    </div>
  );
};

export default Header;
