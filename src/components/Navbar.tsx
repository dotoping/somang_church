import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav__logo">Somang Church</div>
      <ul className="nav__menu">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <ul className="nav__icons">
        <li>
          <FacebookIcon />
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
