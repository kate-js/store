import './footer.css';
import LogoSchool from '../../assets/rss_logo.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/kate-js" className="footer__github">
        <span>GitHub: kate-js</span>
      </a>
      <span>2022</span>
      <a href="https://rs.school/js/" className="footer__logo">
        <img src={LogoSchool} alt="logo RSSchool" />
      </a>
    </footer>
  );
};

export default Footer;
