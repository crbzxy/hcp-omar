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
    <div className='contenido max-w-6xl mx-auto'>
      <h2 className={styles.title}>Certificados</h2>{' '}
      <p className={styles.description}>
        Experiencia en múltiples procedimientos en Cáncer urológico
      </p>
      <section className='section certificados '>
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
      <section className="relative">
    
{/* Section background (needs .relative class on parent and next sibling elements) */}

<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
  <div className="py-12 md:py-20">

    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
      <h2 className="h2 mb-4">How Simple works</h2>
      <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
    </div>

    {/* Items */}
    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

      {/* 1st item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
              <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
              <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Initial Contact</h4>
        <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 2nd item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2" transform="translate(19.429 20.571)">
              <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
              <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
              <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Discovery Session</h4>
        <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 3rd item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeLinecap="square" strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
              <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contracting</h4>
        <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 4th item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g transform="translate(22.857 19.429)" strokeWidth="2">
              <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
              <path className="stroke-current text-white" d="M16 12.571h8" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
              <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
            </g>
          </g>
        </svg>              
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fast Prototyping</h4>
        <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 5th item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeLinecap="square" strokeWidth="2">
              <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
              <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
        <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 6th item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
              <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
              <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
              <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Develop & Launch</h4>
        <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

    </div>

  </div>
</div>
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
