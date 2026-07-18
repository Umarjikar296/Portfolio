import React from 'react';
import Navbar from './Navbar';
import Home from '../section/Home';
import About from '../section/About';
import Skills from '../section/Skills';
import CaseStudies from '../section/CaseStudies';
import Experience from '../section/Experience';
import Contact from '../section/Contact';
import Footer from '../section/Footer';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <CaseStudies />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
