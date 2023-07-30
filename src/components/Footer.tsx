import React from 'react';
import styles from '../styles/Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.title}>&copy; Логистические маршруты 2023</span>
    </div>
  );
};
