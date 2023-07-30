import React from 'react';
import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.title}>Логистические маршруты</span>
    </div>
  );
};
