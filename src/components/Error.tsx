import React from 'react';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { selectError } from '../selectors/appSelectors';
import styles from '../styles/Error.module.scss';

export const Error = () => {
  const error = useSelector(selectError);

  return <div className={styles.errorContainer}>{error && <Alert message={`${error}`} type="error" />}</div>;
};
