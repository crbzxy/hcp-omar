import React from 'react';
import Image from 'next/image';
import styles from '../styles/features.module.css';
import { motion } from 'framer-motion';
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };
const tasks = ['Go to gym', 'Launch Feature A', 'Call Mom', 'Get diapers'];

export default function FeatureA() {
  return (
    <section  id='sobremi' className='section bg-white'>
      <motion.div
       
        initial={initial}
        whileInView={animate}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className={styles.contentWrapper}>
        <h4 className={styles.title}>Sobre mi</h4>
        <p className={styles.content}>
          Experto en el diagnóstico y el tratamiento del cáncer urológico
          (Próstata, vejiga , riñón, testículo y pene) además de atender
          padecimientos urológicos diversos.
        </p>
        <p className={styles.content}>
          Urólogo con notable carrera que se destaca en el área oncológica y de
          mínima invasión.
        </p>
        <p className={styles.content}>
          Me he destacado por una continua preparación, realizando en 2018 un
          preceptorship (estancia formativa) en Andrología (Medicina del hombre)
          en la Fundació Puigvert en Barcelona España así como presentaciones de
          trabajos de investigación a nivel internacional y revisor de trabajos
          de investigación en revista internacional.
        </p>
       

        <button className='primaryBTN lg:mr-8 mb-4 lg:mb-0'>Contactame</button>
      </motion.div>
      <div className={styles.imageWrapper}>
        <div className='appBlurImage'>
          <Image src='/app_bg.svg' alt='' width={800} height={800} />
        </div>
        <Image src='/omarhcp.svg' alt='' width={800} height={800} />
      </div>
    </section>
  );
}
