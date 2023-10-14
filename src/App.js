import React from 'react';
import "./App.css"
import Hero from './Container/Hero';
import Brands from './Container/Brands';
import Team from './Container/Team';
import ClientProject from './Container/ClientProject';
import Contact from './Container/Contact';
import Skills from './Container/Skills';
import Footer from './Container/Footer';
import Testimonial from './Container/Testimonial';

const App = () => {
    return (
        <div>
        <Hero />
        <Brands />
        <Skills />
        <Team />
        <ClientProject />
        <Testimonial />
        <Contact />
        <Footer />
        </div>
    );
};

export default App;