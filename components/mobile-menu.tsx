import styles from '../styles/Header.module.css';

export default function MobileMenu() {
  return (
    <div id='mobile-menu' className={styles.mobileMenuWrapper}>
      <ul className={styles.mobileNav}>
        <li>
          <a href='#'>Sobre mi</a>
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
      <div className={styles.mobileHeaderCTA}>
     <a href="#contacto">   <button className='primaryBTN w-full'>Contacto</button></a>
        
      </div>
    </div>
  );
}
