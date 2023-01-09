import React from 'react';
import Logo from './logo';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import HospitalesRender from './hospitales';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id='contacto'>
      <div>
        <div className={styles.linksWrapper}>
          <p className={styles.lh5}>Contáctame</p>
          <ul>
            <li>
              <a className='mr-6' href='tel:+52 722 4862 582'>
                <Image
                  className='opacity-70'
                  src='/smartphone.svg'
                  width={20}
                  height={20}
                  alt='smartphone'
                />
                <p className='ml-2'>+52 722 4862 582</p>
              </a>
            </li>{' '}
            <li>
              <a className='mr-6' href='mailto:eopinon@gmail.com'>
                <Image
                  className='opacity-70'
                  src='/email.svg'
                  width={20}
                  height={20}
                  alt='instagram'
                />
                <p className='ml-2'>eopinon@gmail.com</p>
              </a>
            </li>
            <li>
              <a
                className='mr-6'
                href='https://www.instagram.com/dr.omar.pinon/'>
                <Image
                  className='opacity-70'
                  src='/instagram.svg'
                  width={20}
                  height={20}
                  alt='instagram'
                />
                <p className='ml-2'>Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <HospitalesRender />
      <div>
        <p className={styles.footerCopyright}>
          Copyright {year}, Dr. Omar Piñón Solís, Urologo, Cédula: 11592559 /
          8587201
        </p>
      </div>
    </footer>
  );
}
