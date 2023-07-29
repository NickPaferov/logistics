import React from 'react';
import { Header } from './Header';
import { Display } from './Display';
import { Footer } from './Footer';
import { Error } from './Error';
import { Preloader } from './Preloader';

export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '100vh' }}>
      <Preloader />
      <Error />
      <Header />
      <Display />
      <Footer />
    </div>
  );
};
