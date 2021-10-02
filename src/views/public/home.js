import React, { useEffect, useState } from 'react';
import Header from '../../components/public/header';
import Hero from '../../pages/home/hero';
import Feature from '../../pages/home/feature';
import Footer from '../../pages/home/footer';

const Home = () => {
  const [state, setState] = useState();
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
