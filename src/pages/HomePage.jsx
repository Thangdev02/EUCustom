import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Services from '../components/Home/Service';
import News from '../components/Home/New';

const HomePage = () => {
    return (
        <div>
            <Hero />
      <About />
      <Services />
      <News />
        </div>
    );
};

export default HomePage;