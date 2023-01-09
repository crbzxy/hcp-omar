import React from 'react';

const Hospitales = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className='flex flex-wrap hospitales'>
        <h4 className='text-4xl mb-2'>Hospitales</h4>
        <div className='container flex justify-center content-center'>
          <ul
            className='flex mb-0 list-none flex-col  h-full justify-center align-middle'
            role='tablist'>
            <li className=' mb-3 mr-4 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs text-left  font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal max-w-[300px] ' +
                  (openTab === 1
                    ? 'text-white bg-' + '[#4D9AD2]'
                    : 'text-' + '[#4D9AD2]' + ' bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'>
                Hospital Florencia <br />
                <small>
                  Torre 1 Consultorio 19 Vicente Guerrero 205, Col. Morelos,
                  Toluca Estado de México, C.P. 50120
                </small>
              </a>
            </li>
            <li className='mb-3 mr-4 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs text-left  font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal max-w-[300px] ' +
                  (openTab === 2
                    ? 'text-white bg-' + '[#4D9AD2]'
                    : 'text-' + '[#4D9AD2]' + ' bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'>
                Médica Mía
                <br />
                <small>
                  Consultorio 108 Blvd. Miguel Alemán #57-Lote 2, Parque
                  Industrial Lerma, 52000 Lerma, Estado de Méx
                </small>
              </a>
            </li>
            <li className='mb-3 mr-4 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs text-left font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal max-w-[230px] ' +
                  (openTab === 3
                    ? 'text-white bg-' + '[#4D9AD2]'
                    : 'text-' + '[#4D9AD2]' + ' bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'>
                Médica Árbol de la Vida
                <br />
                <small>
                  Consultorio 302 Calle Josefa Ortiz de Domínguez 538,
                  Coaxustenco, 52140 Metepec, Méx.
                </small>
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.9492383465861!2d-99.674564631726!3d19.283589291283327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8913dc234d0b%3A0xa851eeccd4a7558b!2sTorre%20M%C3%A9dica%20Florencia!5e0!3m2!1ses-419!2smx!4v1673154137945!5m2!1ses-419!2smx'
                    width={'100%'}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.749888716488!2d-99.5600402846762!3d19.293239886963704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8ac7e67e9aab%3A0xbe2160cf93dd7361!2sHospital%20M%C3%A9dica%20MIA!5e0!3m2!1ses-419!2smx!4v1673154260032!5m2!1ses-419!2smx'
                    width={'100%'}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.530704265513!2d-99.61703338467657!3d19.259274086982987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bc90920afed%3A0xc9f8e5e1f58ae67d!2sM%C3%A9dica%20%C3%81rbol%20de%20la%20Vida!5e0!3m2!1ses-419!2smx!4v1673154288990!5m2!1ses-419!2smx'
                    width={'100%'}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function HospitalesRender() {
  return (
    <>
      <Hospitales />;
    </>
  );
}
