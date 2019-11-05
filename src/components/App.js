import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './Container/HomePage/HomePage';

export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
