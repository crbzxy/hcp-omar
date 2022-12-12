import React from 'react';
import Image from 'next/image';
import styles from '../styles/features.module.css';
import { motion } from 'framer-motion';

const initial_card = { opacity: 0, scale: 0 };
const whileInView_card = { opacity: 1, scale: 1 };
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };
const transition_cardA = { delay: 0.4, duration: 0.5 };
const transition_cardB = { delay: 0.5, duration: 0.5 };
const transition_cardC = { delay: 0.6, duration: 0.5 };

export default function FeatureB() {
  return (
    <section className='section h-screen'>
       <div className={styles.featureBImageWrapper}>
        <div className='appBlurImage'>  
          <Image src='/formacion.svg' alt='' width={800} height={800} />
        </div>
        
      </div>
      <motion.div
        initial={initial}
        whileInView={animate}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className={styles.contentWrapper}>
               <p className={styles.heading}>Formación Academica</p>

        <div>
          <p className={styles.stat}>
            Alta especialidad en cáncer genital y urinario
          </p>
          <p className={styles.statsContent}>
            (Instituto Nacional de Cancerología.
            <br />
            UNAM. Ciudad de México. 2020)
          </p>
          <p className={styles.stat}>Urología</p>
          <p className={styles.statsContent}>
          Instituto de Salud del Estado de México. Toluca. 2019
          </p>
          <p className={styles.stat}>Enfermedades de transmisión sexual, eyaculación precoz y disfunción eréctil</p>
          <p className={styles.statsContent}>
          Fundación Puigvert. Universidad Autónoma de Barcelona. Barcelona España. 2018
          </p>
          <p className={styles.stat}>Cirugía General</p>
          <p className={styles.statsContent}>
          Centro Médico ISSEMYM. Toluca. 2014
          </p>
          <p className={styles.stat}>Médico Cirujano</p>
          <p className={styles.statsContent}>
          Universidad Autónoma del Estado de México. 2013
          </p>
        </div>
       

        <button className='w-full lg:w-max px-4 py-3 bg-[#00BCD4] hover:bg-[#518eaa] hover:cursor-pointer text-white font-medium rounded lg:mr-8 mb-4 lg:mb-0'>
         Contactame
        </button>
      </motion.div>
     
    </section>
  );
}
