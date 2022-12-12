import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import Phone from './phone';
import { motion } from 'framer-motion';

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const transition_h1 = { delay: 0.2, duration: 0.5 };
const transition_h2 = { delay: 0.2, duration: 0.5 };
const transition_P = { delay: 0.3, duration: 0.5 };
const transition_btn_a = { delay: 0.4, duration: 0.5 };
const transition_btn_b = { delay: 0.4, duration: 0.5 };


export default function Hero() {
  return (
    <>
     <section className='section'>
      
      <div className={styles.leftDiv}>
        <div className='appBlurImage'>
          <Image src='/app_bg.svg' alt='' width={800} height={800} />
        </div>
        <Image src='/DrOmarPinonSolsContactame.svg' alt='' width={800} height={800} />
      </div>
      <div className={styles.rightDiv}>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={transition_h1}
          className={styles.heading}>
          Dr. Omar Piñón Solís
        </motion.h1>
        <motion.h2 initial={initial}
          animate={animate}
          transition={transition_h2}
          className={styles.content}>Cédula: 11592559 / 8587201</motion.h2>
     
        <motion.h1
          initial={initial}
          animate={animate}
          transition={transition_h1}
          className={styles.heading}>
          Urólogo, Toluca Metepec
        </motion.h1>
        
      
        <motion.p
          initial={initial}
          animate={animate}
          transition={transition_P}
          className={styles.content}>
          Experto en diagnóstico y tratamiento del cáncer de urológico (Próstata, vejiga, riñón, testículo y pene)

        </motion.p>
        <div className={styles.ctaContainer}>
          <motion.button
            initial={initial}
            animate={animate}
            transition={transition_btn_a}
            className='primaryBTN lg:mr-8 mb-4 lg:mb-0'>
            Contactame
          </motion.button>
         
        </div>
      </div>
      </section>
      {/* <section>
        <motion.div
          initial={initial}
          animate={animate}
          transition={transition_h1}
          className={styles.heading}>
        
   
          <div className="contador">
            <div className="contador__item">
              <div className="contador__item__numero">
                <span className="contador__item__numero__num">1</span>
                <span className="contador_titulo">Años de experiencia</span>
             </div>


            </div>
            <div className="contador__item">
              <div className="contador__item__numero">
                <span className="contador__item__numero__num">1</span>
                <span className="contador_titulo">Años de experiencia</span>
             </div>


            </div>
            <div className="contador__item">
              <div className="contador__item__numero">
                <span className="contador__item__numero__num">1</span>
                <span className="contador_titulo">Años de experiencia</span>
             </div>


            </div>
            <div className="contador__item">
              <div className="contador__item__numero">
                <span className="contador__item__numero__num">1</span>
                <span className="contador_titulo">Años de experiencia</span>
             </div>


             </div>

          </div>
        </motion.div>

      </section> */}
      <section className={styles.wraps}>
        <div className={styles.containerstats}>
        <div className={styles.statsWrapper}>
          <p className={styles.stat}>+13</p>
          <p className={styles.statsContent}>
          Años de experiencia
          </p>
        </div>  
        </div>
        <div className={styles.containerstats}>
        <div className={styles.statsWrapper}>
          <p className={styles.stat}>+280</p>
          <p className={styles.statsContent}>
          Pacientes
          </p>
        </div>  
        </div>
        <div className={styles.containerstats}>
        <div className={styles.statsWrapper}>
          <p className={styles.stat}>12</p>
          <p className={styles.statsContent}>
          Certificaciones
          </p>
        </div>  
        </div>
      
     </section>
    </>
  );
}
