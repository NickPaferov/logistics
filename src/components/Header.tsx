import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const Header = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title level={2}>Логистические маршруты</Title>
    </div>
  );
};
