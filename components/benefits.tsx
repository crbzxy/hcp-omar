import React from 'react';
import styles from '../styles/Benefits.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

const beneftis = [
  {
    title: 'Cirugía General     ',
    description: 'Centro Médico ISSEMYM. Toluca.',
    image: 'icon_bulb',
  },
  {
    title: 'Médico Cirujano',
    description: 'Universidad Autónoma del Estado de México',
    image: 'icon_db',
  },
  {
    title: 'Preceptorship en Andrología',
    description: 'Fundación Puigvert en Barcelona, España',
    image: 'icon_lock',
  },
  {
    title: 'Socio Titular',
    description: 'Sociedad Mexicana de Urología',
    image: 'icon_lock',
  },
  {
    title: 'Alta especialidad en Urología Ocológica',
    description: 'Instituto nacional de Cancerología',
    image: 'icon_lock',
  },
  {
    title: 'Alta especialidad en Medicina, Urología Oncológica',
    description: 'Universidad Autónoma del Estado de México',
    image: 'icon_lock',
  },
  {
    title: 'Especialidad en Urología',
    description: 'Consejo Nacional Mexicano de Urología',
    image: 'icon_lock',
  },
  {
    title: 'Especialidad en Urología',
    description: 'Universidad Autónoma del Estado de México',
    image: 'icon_lock',
  },
  {
    title: 'Profesor de la acedemia de urología de la Facultad de Medicina',
    description: 'Universidad Autónoma de México',
    image: 'icon_lock',
  },
];

export default function Benefits() {
  return (
    <div className='contenido'>
      <h2 className={styles.title}>Certificados</h2>{' '}
      <p className={styles.description}>
        Experiencia en múltiples procedimientos en Cáncer urológico
      </p>
      <section className='section certificados'>
        {beneftis?.map((item, index) => {
          return (
            <motion.div
              key={item.title}
              initial={initial}
              whileInView={animate}
              transition={{ delay: 0.5 + index / 10 }}
              viewport={{ once: true }}
              className={styles.card}>
              <div className={styles.Image}>
                <Image
                  width={15}
                  height={15}
                  src={`/${item.image}.svg`}
                  alt={item.title}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <small>{item.description}</small>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
