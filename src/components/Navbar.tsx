import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav__logo">
        <img src={logo} alt="logo" width={'120px'} height={'120px'} />
      </div>
      <ul className="nav__menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/giving">Giving</Link>
        </li>
      </ul>
      <ul className="nav__icons">
        <li>
          <FacebookIcon
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                'https://ko-kr.facebook.com/melSomangchurch/',
                '_blank'
              )
            }
          />
        </li>
        <li>
          <InstagramIcon />
        </li>
      </ul>
      <div className="nav__toggle">
        <MenuIcon
          onClick={() => {
            const menu = document.querySelector('.nav__menu');
            const icons = document.querySelector('.nav__icons');
            menu?.classList.toggle('active');
            icons?.classList.toggle('active');
          }}
        />
      </div>
    </nav>
  );
}
