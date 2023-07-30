import React from 'react';
import { NavBar } from './NavBar';
import { Map } from './Map';
import styles from '../styles/Display.module.scss';

export const Display = () => {
  return (
    <div className={styles.displayContainer}>
      <NavBar />
      <Map />
    </div>
  );
};
