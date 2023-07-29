import React from 'react';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { selectError } from '../selectors/selectors';

export const Error = () => {
  const error = useSelector(selectError);

  return (
    <div style={{ position: 'absolute', width: '35%', textAlign: 'center' }}>
      {error && <Alert message={`${error}`} type="error" />}
    </div>
  );
};
