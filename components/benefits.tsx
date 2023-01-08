import React from 'react';
import styles from '../styles/Benefits.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrophyIcon } from '@heroicons/react/24/outline';
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

const beneftis = [
  {
    title: 'Cirugía General     ',
    description: 'Centro Médico ISSEMYM. Toluca.',
    image: '4',
  },
  {
    title: 'Médico Cirujano',
    description: 'Universidad Autónoma del Estado de México',
    image: '5',
  },
  {
    title: 'Preceptorship en Andrología',
    description: 'Fundación Puigvert en Barcelona, España',
    image: '11',
  },
  {
    title: 'Socio Titular',
    description: 'Sociedad Mexicana de Urología',
    image: '8',
  },
  {
    title: 'Alta especialidad en Urología Ocológica',
    description: 'Instituto nacional de Cancerología',
    image: '1',
  },
  {
    title: 'Alta especialidad en Medicina, Urología Oncológica',
    description: 'Universidad Autónoma del Estado de México',
    image: '5',
  },
  {
    title: 'Especialidad en Urología',
    description: 'Consejo Nacional Mexicano de Urología',
    image: '9',
  },
  {
    title: 'Especialidad en Urología',
    description: 'Universidad Autónoma del Estado de México',
    image: '5',
  },
  {
    title: 'Profesor de la acedemia de urología de la Facultad de Medicina',
    description: 'Universidad Autónoma de México',
    image: '10',
  },
];

const features = [
  {
    name: 'Generalidades y tratamiento quirúrgico del cáncer de próstata',
    description: '(Curso actualización Urología Oncológica .CDMX, 2020)',
    icon: TrophyIcon,
  },
  {
    name: 'Revisor de la revista inglesa ',
    description: '(British Medical Journal Case Reports); 2020.',
    icon: TrophyIcon,
  },
  {
    name: 'Predictive value of C- reactive protein in the expulsion of ureteral stones (6-10 millimeters) from the lower third ',
    icon: TrophyIcon,
    description:
      '(36 th World Congress of Endourology and SWL . Paris Francia, 2018)',
  },
  {
    name: '3er Lugar nacional, Jeopardy de Residentes,',
    icon: TrophyIcon,
    description: '(Sociedad Mexicana de Urología, 2018)',
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
                  width={80}
                  height={80}
                  src={`/formacion${item.image}.svg`}
                  alt={item.title}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <small>{item.description}</small>
            </motion.div>
          );
        })}
      </section>
      <div className='bg-white py-24 sm:py-32 lg:py-40'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='sm:text-center'>
           
            <h3 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
            Reconocimientos             </h3>
          
          </div>

          <div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
            <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#4D9AD2] text-white sm:shrink-0'>
                    <feature.icon className='h-8 w-8' aria-hidden='true' />
                  </div>
                  <div className='sm:min-w-0 sm:flex-1'>
                    <p className='text-lg font-semibold leading-8 text-gray-900'>
                      {feature.name}
                    </p>
                    <p className='mt-2 text-base leading-7 text-gray-600'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
