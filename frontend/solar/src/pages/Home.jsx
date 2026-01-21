import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
        </>
    );
};

export default Home;
