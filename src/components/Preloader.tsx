import React from 'react';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import styles from '../styles/Preloader.module.scss';
import { selectDataFetchingStatus } from '../selectors/appSelectors';
import { Spin } from 'antd';

export const Preloader = () => {
  const isLoading = useSelector(selectDataFetchingStatus);

  return (
    <div>
      {isLoading && (
        <div>
          <Alert className={styles.notification} message="Идёт построение маршрута" type="info" />
          <div className={styles.spinContainer}>
            <div className={styles.spin}>
              <Spin size="large" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
