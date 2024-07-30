import React from 'react';
import "./App.css"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Login from './pages/loginPage'
// import Success from './pages/successPage'

// import Hero from './Container/Hero';
// import Brands from './Container/Brands';
// import Team from './Container/Team';
// import ClientProject from './Container/ClientProject';
// import Contact from './Container/Contact';
// import Skills from './Container/Skills';
// import Footer from './Container/Footer';
// import Testimonial from './Container/Testimonial';

import Button from "./ui/Button.js";

const App = () => {
    return (
        <>
     <Button size="large" variant="primary">Primary</Button>
      <Button size="large" variant="secondary">Secondary</Button>
      <Button size="large" variant="success">Success</Button>
      <Button size="large" variant="danger">Danger</Button>
      <Button size="large" variant="warning">Warning</Button>
      <Button size="large" variant="info">Info</Button>
      <Button size="large" variant="light">Light</Button>
      <Button size="large" variant="dark">Dark</Button>
      <Button size="large" variant="outline">Outline</Button>
      <Button size="large" variant="gradient" gradient>Gradient</Button>
      <Button size="large" variant="gradient" gradient borderRadius="rounded-md">Gradient</Button>
      <Button customWidth="200px" customHeight="60px" borderRadius="rounded-full" variant="primary">Custom Size</Button>

      
        {/* <div>
        <Hero />
        <Brands />
        <Skills />
        <Team />
        <ClientProject />
        <Testimonial />
        <Contact />
        <Footer />
        </div> */}
        </>
    );
};

export default App;