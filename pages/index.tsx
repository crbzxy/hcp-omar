import type { NextPage } from 'next';
import Benefits from '../components/benefits';
//import CTA from '../components/CTA';
import FeatureA from '../components/featureA';
import FeatureB from '../components/featureB';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Pricing from '../components/pricing';
import Publications from '../components/publications';
import Testimonials from '../components/testimonials';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const Home: NextPage = () => {
  return (
    <>
      <Hero />
     
      <FeatureB />
      <Benefits /> 
      <Pricing />
      <Publications />
     <Testimonials />
      {/* 
      <CTA /> */}
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+527224862582"
        accountName="Dr. Omar Piñon Solís"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage="Normalmente responde en 3 horas"
        chatMessage="Hola, ¿en qué te puedo ayudar?"
        placeholder="Escribe un mensaje.."
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1alta2OjCQdxMxNz8kRZlfvp4ChuOfq-5ZYVFSjNQ&s"
        style={{ zIndex: '999' }}

      />
    </>
  );
};

export default Home;
