import Image from 'next/image';
import React from 'react';

function Testimonials() {
  const testimonialData = [
    {
      "id": 1,
      "opinion": "Considero que fue una consulta muy enriquecedora. El doctor comprendió mi problema y me dio mucha confianza. Siempre se mostro respetuoso y atento. Demostró dominio sobre mi padecimiento y me indico tratamiento específico que está dando resultados. Excelente servicio.",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 2,
      "opinion": "Excelente Doctor, y lo más importante te da toda la confianza y seguridad para preguntarle cualquier duda que tienes .",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 3,
      "opinion": "Excelente, me trato amigable y cualquier duda que tenía me la explicaba, con mi problema que tuve me lo resolvió super rápido.",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 4,
      "opinion": "La explicación y conocimiento del Dr exelentes. Con mucha claridad y atención fuimos tratadas. Recomendable al 100%",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 5,
      "opinion": "Una explicación concreta detallada de cual es el padecimiento y como lo puedo curar llevando un tratamiento",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 6,
      "opinion": "Excelente servicio, muy profesional y explicaciones muy claras y precisas para entender claramente el problema y sus soluciones.",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 7,
      "opinion": "Es muy atento y explica muy bien con detalles la enfermedad y como sellebara acabo el tratamiento muy bueno lo recomiendo",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 8,
      "opinion": "Muy buena atención mis respetos Dr. OMAR muchas gracias. Nos vemos la próxima consulta muy buen trabajo Buena noches.",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 9,
      "opinion": "Mi papá fue el paciente y recomiendo el doctor ya que da detalles del malestar te dice las cosas en tu idioma te manda hacer estudios para revisar a fondo te manda tratamiento y da seguimiento atendió a mi mamá y ahora atiende a mi papá realmente es de los pocos doctores que he visto que si ve por la salud de las personas",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      "id": 10,
      "opinion": "Muy buena atención,un diagnóstico real y oportuno desde el primer momento me dió la confianza para realizar mi tratamiento un doctor joven muy comprometido con su profesión y gracias a él y su equipo hoy me encuentro bien",
      "rate": "⭐️⭐️⭐️⭐️⭐️"
    }
  ]
  return (
    <div id='opiniones'>
      <section className='relative pt-24 pb-32 bg-white overflow-hidden'>
      
        <div className='relative z-10 container px-4 mx-auto'>
          <h2 className='mb-16 text-6xl md:text-4xl font-bold font-heading text-center tracking-px-n leading-tight'>
          Opiniones
          </h2>
          <div className='overflow-scroll flex flex-shrink overflow-y-hidden '>
            {testimonialData.map((testimonial, index) => (
             <div className='w-full md:w-1/2 lg:w-1/3 p-3 min-w-[300px] max-h-[300px] ' key={index}>
             <div className='p-6 h-full bg-white bg-opacity-60 border rounded-4xl flex '>
               <div className='flex flex-col justify-center content-center'>
                 <div className='mb-5 block'>
                   <div className='flex flex-col content-center justify-center mb-4 -m-2'>
                     {/* <div className='w-auto p-2'>
                       <Image
                         src='/public/email.svg'
                         width={100}
                         height={100}
                         alt='hola$'
                       />
                     </div> */}
                     {/* <div className='w-auto p-2'>
                       <h3 className='font-semibold leading-normal'>
                         Jacob Jones
                       </h3>
                       <p className='text-gray-500 uppercase'>@brooklysim</p>
                     </div> */}
                      </div>
                      
                      
                   <p className='text-sm font-medium'>
                    {testimonial.opinion}
                      </p>
                      <small>{testimonial.rate}</small>
                 </div>
                
               </div>
             </div>
              </div>
            ))
              
            }
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
