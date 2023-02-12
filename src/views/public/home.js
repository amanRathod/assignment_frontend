import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/public/header';
import Hero from '../../pages/home/hero';
import Feature from '../../pages/home/feature';
import Footer from '../../pages/home/footer';

const Home = () => {
  const history = useHistory();
  const user = localStorage.getItem('user');

  useEffect(() => {
    document.title = 'Home';
    // if user logged-in then redirect to previous page
    if (user) {
      history.goBack();
    }
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
