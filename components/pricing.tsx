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
    specs: 'Se realiza una historia clínica detallada del paciente',
    featured: true,
  },
  {
    title: 'subsecuente:',
    price: '800',
    specs:
      'Seguimiento a los padecimientos y/o enfermedades a tratar. En caso de ser necesario se comienza con tratamiento',
  },
  {
    title: 'en línea:',
    price: '700',
    specs: 'A travéz de Zoom. Receta electrónica',
  },
];

const procedimientos = [
  {
    Procedimientos: 'Tratamiento para cáncer urológico',
  },
  {
    Procedimientos: 'Biopsia de próstata',
  },
  {
    Procedimientos: 'Cirugía de próstata con láser holmio',
  },
  {
    Procedimientos: 'Cirugía de próstata con láser verde',
  },
  {
    Procedimientos: 'Extracción de cálculos renales con láser',
  },
  {
    Procedimientos: 'Cirugía de la incurvación del pene',
  },
  {
    Procedimientos: 'Cirugía de Varicucele',
  },
  {
    Procedimientos: 'Circuncisión láser CO2 por fimosis',
  },
  {
    Procedimientos: 'Cirugía laparoscópica de tumores de vías urinarias',
  },
  {
    Procedimientos: 'Alargamiento de penre',
  },
  {
    Procedimientos: 'Cirugía testicular',
  },
  {
    Procedimientos: 'Prótesis testiculares',
  },
  {
    Procedimientos: 'Prótesis de pene',
  },
];

export default function Pricing() {
  return (
    <div className='contenido' id='servicios'>
      <h5 className={styles.title}>Servicios</h5>
      <p className={styles.description}>Encuentra la mejor opción para ti</p>
      <section className='section '>
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
                <div className='p-4  border-slate-200 min-h-[209px] flex flex-col justify-around'>
                  <p className={styles.titleSmall}>Consulta {item.title}</p>
                  <p className={styles.pricing}>
                    ${item.price}
                    <small
                      className={
                        item.featured ? styles.pricingPmALT : styles.pricingPM
                      }></small>
                  </p>
                  <p className={styles.titleSmall}>{item.specs}</p>
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
                <div className='p-4 border-t'>
                  <button
                    className={item.featured ? styles.ctaAlt : styles.cta}>
                    Agendar cita
                  </button>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </section>

        <section className='relative'>
          {/* Section background (needs .relative class on parent and next sibling elements) */}

          <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
            <div className=''>
              {/* Section header */}
              <div className='max-w-3xl mx-auto text-center  md:pb-20'>
                <h2 className='h2 mb-4 text-3xl'>Procedimientos</h2>
                <p className='text-xl text-gray-600'>
                  Experto en diagnóstico y tratamiento del cáncer de urológico
                  <br /> (Próstata, vejiga, riñón, testículo y pene)
                </p>
              </div>

              {/* Items */}
              <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none pb-[70px]'>
                {procedimientos.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'>
                      <h4
                        key={index}
                        className='text-l text-center font-bold  tracking-tight mb-1'>
                        {item.Procedimientos}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
