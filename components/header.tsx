import Logo from './logo';
import MobileMenu from './mobile-menu';
import MobileMenuButton from './mobine-menu-button';
import styles from '../styles/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menuState);
  };

  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <ul className={styles.navMenu}>
          <li>
            <a href='#sobremi'>Sobre mi</a>
          </li>
          <li>
            <a href='#'>Servicios</a>
          </li>
          <li>
            <a href='#'>Opiniones</a>
          </li>
          <li>
            <a href='#'>Publicaciones</a>
          </li>
      
        </ul>
      </nav>
      <div className={styles.navCTA}>
        
        <a href="#contacto">
        <button className='primaryBTN'>Contacto</button>
        </a>
      </div>
      {/* <!-- mobile menu button --> */}
      <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
      {/* <!-- mobile menu --> */}
      {menuState ? <MobileMenu /> : null}
    </header>
  );
}
