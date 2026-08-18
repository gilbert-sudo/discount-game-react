import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import CategoryLinks from '../components/home/CategoryLinks';
import TrendingDeals from '../components/home/TrendingDeals';
import Newsletter from '../components/home/Newsletter';
import Reviews from '../components/home/Reviews';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <CategoryLinks />
      <TrendingDeals />
      <Newsletter />
      <Reviews />
    </>
  );
};

export default Home;
