import React from 'react';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import styles from '../styles/Preloader.module.scss';
import { selectDataFetchingStatus } from '../selectors/appSelectors';

export const Preloader = () => {
  const isLoading = useSelector(selectDataFetchingStatus);

  return (
    <div className={styles.notification}>{isLoading && <Alert message="Идёт построение маршрута" type="info" />}</div>
  );
};
