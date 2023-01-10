import React from 'react';
import Image from 'next/image';
import styles from '../styles/features.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';
const formacion = [
  {
    Nombre: 'Alta especialidad en cáncer genital y urinario',
    Institucion:
      'Instituto Nacional de Cancerología. UNAM. Ciudad de México. 2020)',
    Img: 1,
  },
  {
    Nombre: 'Urología',
    Institucion: 'Instituto de Salud del Estado de México. Toluca. 2019)',
    Img: 3,
  },
  {
    Nombre:
      'Enfermedades de transmisión sexual, eyaculación precoz y disfunción eréctil',
    Institucion:
      'Fundación Puigvert. Universidad Autónoma de Barcelona. Barcelona España. 2018)',
    Img: 2,
  },
  {
    Nombre: 'Cirugía General',
    Institucion: 'Centro Médico ISSEMYM. Toluca. 2014)',
    Img: 4,
  },
  {
    Nombre: 'Médico Cirujano',
    Institucion: 'Universidad Autónoma del Estado de México. 2013)',
    Img: 5,
  },
];
export default function FeatureB() {
  return (
    <>
      <h3 id='sobremi' className='text-3xl text-center py-10'>Especialidades</h3>
      <div className='chipContainer  content-around justify-evenly flex w-full '>
        <div className='basic-chip text-2xl background-blue'>Urología</div>

        <div className='basic-chip text-2xl background-blue'>
          Urología Oncológica
        </div>
        <div className='basic-chip text-2xl background-blue'>Andrología </div>
      </div>
      <div className='contenido'>
        <h3 className={styles.titulos}>Formación Academica</h3>

        <section className='section '>
          <div className={styles.featureBImageWrapper}>
            <div className='appBlurImage'>
              <Image src='/formacion.svg' alt='' width={600} height={600}  className="m-4"/>
            </div>
          </div>

          <div className={styles.contentFormacion}>
            <Swiper
              slidesPerView={2}
              spaceBetween={3}
              navigation={true}
              pagination={true}
              modules={[Pagination, Navigation]}
              className='mySwiper'>
              {formacion.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.card}>
                      <div className={styles.cardImage}>
                        <Image
                          src={`/formacion${item.Img}.svg`}
                          alt=''
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{item.Nombre}</h3>
                        <p className={styles.cardText}>{item.Institucion}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
