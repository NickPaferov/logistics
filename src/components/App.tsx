import React from 'react';
import { Header } from './Header';
import { Display } from './Display';
import { Footer } from './Footer';
import { Error } from './Error';
import { Preloader } from './Preloader';
import styles from '../styles/App.module.scss';

export const App = () => {
  return (
    <div className={styles.layout}>
      <Preloader />
      <Error />
      <Header />
      <Display />
      <Footer />
    </div>
  );
};
