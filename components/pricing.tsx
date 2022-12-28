import React from 'react';
import styles from '../styles/Pricing.module.css';
import { motion } from 'framer-motion';

const initial = { opacity: 0 };
const whileInView = { opacity: 1 };
const transition_h1 = { delay: 0.2, duration: 0.5 };
const transition_P = { delay: 0.3, duration: 0.5 };

const data = [
  {
    title: 'de primera vez:',
    price: '900',
    specs:'Se realiza una historia clínica detallada del paciente',
    featured: true,
  },
  {
    title: 'subsecuente:',
    price: '800',
    
  },
  {
    title: 'en línea:',
    price: '700',
    
  },
 
];

export default function Pricing() {
  return (
    <section className='section bg-gray-100'>
      <h5 className={styles.title}>
     Servicios
      </h5>
      <p className={styles.description}>
        Encuentra la mejor opción para ti 
      </p>
      <div className={styles.pricingWrapper}>
        {data.map((item, index) => {
          return (
            <motion.div
              key={item.title}
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index / 10 }}
              className={item.featured ? styles.cardPopular : styles.card}>
              <div className='p-4 border-b border-slate-200 min-h-[209px]'>
                <p className={styles.titleSmall}>Consulta {item.title}</p>
                <p className={styles.pricing}>
                  ${item.price}
                  <small
                    className={
                      item.featured ? styles.pricingPmALT : styles.pricingPM
                    }>
                    
                  </small>
                 
                </p>
                <p className={styles.titleSmall}> 
                {item.specs }</p>
                {/* <small
                  className={item.featured ? styles.peopleAlt : styles.people}>
                  This package is suitable <br />
                  for teams of 1 - {item.people
                    ? item.people
                    : 'Unlimited'}{' '}
                  people
                </small> */}
              </div>
              {/* <div className='p-4'>
                <ul className={styles.list}>
                  <li>
                    <img src='/check.svg' className='mr-2 w-4' alt='' />{' '}
                    {item.disk} GB DIsk Space
                  </li>
                  <li>
                    <img src='/check.svg' className='mr-2 w-4' alt='' />{' '}
                    {item.support} Year Support
                  </li>
                  <li>
                    <img src='/check.svg' className='mr-2 w-4' alt='' />{' '}
                    {item.queries} Queries
                  </li>
                  <li>
                    <img src='/check.svg' className='mr-2 w-4' alt='' />{' '}
                    {item.stats} Statistics
                  </li>
                  <li>
                    <img src='/check.svg' className='mr-2 w-4' alt='' /> Free
                    Custom Domain
                  </li>
                </ul>
              </div> */}
              <div className='p-4'>
                <button className={item.featured ? styles.ctaAlt : styles.cta}>
                Agendar cita
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
