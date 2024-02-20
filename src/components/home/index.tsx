'use client';
import React from 'react';
import Footer from '../../commonComponents/footer';
import Navbar from '../../commonComponents/navbar';
import HeaderSection from './Header';
import Craft from './Craft';
import Monitor from './Monitor';
import Identity from './Identity';
import Profile from './Profile';
import UniqueLink from './UniqueLink';
import FAQ from './FAQ';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <Craft />
      <Monitor />
      <Identity />
      <Profile />
      <UniqueLink />
      <FAQ /> <Footer />
    </>
  );
};

export default HomePage;
