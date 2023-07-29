import React from 'react';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { selectPolylineDataFetchingStatus } from '../selectors/selectors';

export const Preloader = () => {
  const isLoading = useSelector(selectPolylineDataFetchingStatus);

  return (
    <div style={{ position: 'absolute', width: '35%', textAlign: 'center' }}>
      {isLoading && <Alert message="Идёт построение маршрута" type="info" />}
    </div>
  );
};
