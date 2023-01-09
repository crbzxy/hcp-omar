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
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const Home: NextPage = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );
    return (
        <>
            <Hero />
            <FeatureA />
            <FeatureB />
            <Benefits />
            <Pricing />
            <Publications />
            <Testimonials />

            <Footer />
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: '#F2FEFF',
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#AFF6FF',
                        },
                        links: {
                            color: '#67EEFF',
                            distance: 150,
                            enable: true,
                            opacity: 0.7,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.9,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <FloatingWhatsApp
                phoneNumber='+527224862582'
                accountName='Dr. Omar Piñon Solís'
                allowEsc
                allowClickAway
                notification
                notificationSound
                statusMessage='Normalmente responde en 3 horas'
                chatMessage='Hola, ¿en qué te puedo ayudar?'
                placeholder='Escribe un mensaje..'
                avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1alta2OjCQdxMxNz8kRZlfvp4ChuOfq-5ZYVFSjNQ&s'
                style={{ zIndex: '999' }}
            />
        </>
    );
};

export default Home;
