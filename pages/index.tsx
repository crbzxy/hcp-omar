import type { NextPage } from 'next';
import Benefits from '../components/benefits';
//import CTA from '../components/CTA';
import FeatureA from '../components/featureA';
import FeatureB from '../components/featureB';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Pricing from '../components/pricing';
//import Reviews from '../components/reviews';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
     
      <FeatureB />
      <Benefits /> 
      <Pricing />
      {/* <Reviews />
      <CTA /> */}
      <Footer />
    </>
  );
};

export default Home;
